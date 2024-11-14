import { getArtistNames } from '~/utils/common';
import { dataExtractor } from '~/utils/dataExtractor';

export const propDataCreator = (data: any, config: any) => {
  const componentData: any = {};
  Object.keys(config).forEach((configItem) => {
    componentData[configItem] = dataExtractor(data, config[configItem]);
    componentData['href'] = `${dataExtractor(data, 'type')}/${dataExtractor(
      data,
      'token'
    )}`;
  });
  componentData['artists'] = getArtistNames(
    dataExtractor<typeof data>(data, config?.artists)
  );

  return componentData;
};
