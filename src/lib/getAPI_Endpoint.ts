export default function getAPI_Endpoint(): string {
  const ENV_MODE = process.env.REACT_APP_ENV_MODE;
  const API_END_POINT_DEV: string = process.env.REACT_APP_API_END_POINT_DEV!;
  const API_END_POINT_PROD: string = process.env.REACT_APP_API_END_POINT_PROD!;

  return ENV_MODE === "DEV" ? API_END_POINT_DEV : API_END_POINT_PROD;
}
