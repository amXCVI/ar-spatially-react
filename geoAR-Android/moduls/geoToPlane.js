export let objData = {
  x: 0.0,
  z: 0.0,
};

/* Расчёт x,y */
function toRadians(degrees) {
  return (degrees * Math.PI) / 180;
}
/* Метод Гауса Крюггера */
export function calcToPlane(lat, lon) {
  const a = 6378245.0;
  const b = 6356863.019;
  const e2 = (Math.pow(a, 2) - Math.pow(b, 2)) / Math.pow(a, 2);
  const n = (a - b) / (a + b);
  const zone = Math.floor(lon / 6.0 + 1);
  const F = 1.0;
  const Lat0 = 0.0;
  const Lon0 = toRadians(zone * 6 - 3);
  const N0 = 0.0;
  const E0 = zone * 1e6 + 500000.0;

  const Lat = toRadians(lat);
  const Lon = toRadians(lon);

  const sinLat = Math.sin(Lat);
  const cosLat = Math.cos(Lat);
  const tanLat = Math.tan(Lat);

  const v = a * F * Math.pow(1 - e2 * Math.pow(sinLat, 2), -0.5);
  const p = a * F * (1 - e2) * Math.pow(1 - e2 * Math.pow(sinLat, 2), -1.5);
  const n2 = v / p - 1;
  const M1 =
    (1 + n + (5.0 / 4.0) * Math.pow(n, 2) + (5.0 / 4.0) * Math.pow(n, 3)) *
    (Lat - Lat0);
  const M2 =
    (3 * n + 3 * Math.pow(n, 2) + (21.0 / 8.0) * Math.pow(n, 3)) *
    Math.sin(Lat - Lat0) *
    Math.cos(Lat + Lat0);
  const M3 =
    ((15.0 / 8.0) * Math.pow(n, 2) + (15.0 / 8.0) * Math.pow(n, 3)) *
    Math.sin(2 * (Lat - Lat0)) *
    Math.cos(2 * (Lat + Lat0));
  const M4 =
    (35.0 / 24.0) *
    Math.pow(n, 3) *
    Math.sin(3 * (Lat - Lat0)) *
    Math.cos(3 * (Lat + Lat0));
  const M = b * F * (M1 - M2 + M3 - M4);
  const I = M + N0;
  const II = (v / 2) * sinLat * cosLat;
  const III =
    (v / 24) *
    sinLat *
    Math.pow(cosLat, 3) *
    (5 - Math.pow(tanLat, 2) + 9 * n2);
  const IIIA =
    (v / 720) *
    sinLat *
    Math.pow(cosLat, 5) *
    (61 - 58 * Math.pow(tanLat, 2) + Math.pow(tanLat, 4));
  const IV = v * cosLat;
  const V = (v / 6) * Math.pow(cosLat, 3) * (v / p - Math.pow(tanLat, 2));
  const VI =
    (v / 120) *
    Math.pow(cosLat, 5) *
    (5 -
      18 * Math.pow(tanLat, 2) +
      Math.pow(tanLat, 4) +
      14 * n2 -
      58 * Math.pow(tanLat, 2) * n2);

  const N =
    I +
    II * Math.pow(Lon - Lon0, 2) +
    III * Math.pow(Lon - Lon0, 4) +
    IIIA * Math.pow(Lon - Lon0, 6);
  const E =
    E0 +
    IV * (Lon - Lon0) +
    V * Math.pow(Lon - Lon0, 3) +
    VI * Math.pow(Lon - Lon0, 5);

  if (N !== undefined && E !== undefined) {
    objData.x = N;
    objData.z = E;
  }
  return { x: N, z: E };
}
