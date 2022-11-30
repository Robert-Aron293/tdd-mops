class Utils {
  private static instance: Utils;

  private constructor() {}

  public static getInstance(): Utils {
    if (!Utils.instance) {
      Utils.instance = new Utils();
    }

    return Utils.instance;
  }

  public parseJwt(token: string | null | undefined): string | null {
    if (token == null || token == undefined) return null;

    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }
}

export default Utils;
