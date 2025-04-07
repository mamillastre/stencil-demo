const iconContent = new Map<string, Promise<string>>();

export const getSvgContent = (url: string) => {
  if (typeof fetch === 'undefined' || typeof document === 'undefined') {
    // set to empty for ssr scenarios
    return Promise.resolve('');
  }

  let request = iconContent.get(url);

  if (!request) {
    request = fetch(url).then(res => {
      if (res.ok) {
        return res.text().then(svgContent => {
          return svgContent || '';
        });
      }
      throw new Error(`Failed to load the ${url} icon.`);
    });

    iconContent.set(url, request);
  }

  return request;
};
