import Component from "@glimmer/component";
import ENV from "super-rentals/config/environment";
const MAPBOX_API = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static";

export default class MapComponent extends Component {
  get src() {
    let { lng, lat, width, height, zoom } = this.args;

    let coordinates = `${lng},${lat},${zoom}`;
    let dimensions = `${width}x${height}`;
    // this.token 으로 our token 을 access 한다.
    let accessToken = `access_token=${this.token}`;

    return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
  }

  get token() {
    // mapbox 에서 generated public token 을 environment.js 에서
    // read 하여 token getter 로 부터 return 한다.
    // map.hbs 에서 this.token 으로 token access 할 수 잇다.
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  }
}
