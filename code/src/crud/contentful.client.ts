import { EntrySkeletonType, createClient } from 'contentful';
const contentfulSpace: string = process.env.REACT_APP_CONTENTFUL_CONTENT_SPACE_ID as string;
const contentfulDeliverykey: string = process.env.REACT_APP_CONTENTFUL_CONTENT_DELIVERY_KEY as string;

const client = createClient({
  space: contentfulSpace,
  accessToken: contentfulDeliverykey
});

interface IConfig {
  content_type: string;
  [key: string]: string;
}

export const getContentTypes = () => client.getContentTypes();
export const getEntry = (entryId: string) => client.getEntry(entryId);
export const getEntries = <EntrySkeleton extends EntrySkeletonType>(config?: IConfig) => client.getEntries<EntrySkeleton>(config);
export const getAsset = (assetId: string) => client.getAsset(assetId);
export const getAssets = () => client.getAssets();
export const getLocales = () => client.getLocales();
