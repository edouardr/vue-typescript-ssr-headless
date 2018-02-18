import { ItemResponses } from "kentico-cloud-delivery-node-sdk";
import { Cafe } from "~/models";

export interface ICafeService {
  getAll(): Promise<ItemResponses.DeliveryItemListingResponse<Cafe>>;
}
