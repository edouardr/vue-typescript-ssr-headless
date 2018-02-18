import { DeliveryClientConfig, DeliveryNodeClient, TypeResolver } from "kentico-cloud-delivery-node-sdk";
import { ContentTypes } from "~/content-types";
import { Cafe } from "~/models";

const deliveryClientFactory = () => {

  const projectId = "06f8ee78-e19a-46e7-acd8-d8e8f2abe5d6";

  const typeResolvers: TypeResolver[] = [
    new TypeResolver(ContentTypes.Cafe.codeName, () => new Cafe()),
  ];

  return new DeliveryNodeClient(
    new DeliveryClientConfig(projectId, typeResolvers),
  );
};

export const deliveryClient: DeliveryNodeClient = deliveryClientFactory();
