import { ICafeService } from "api/icafe-service";
import { inject, injectable } from "inversify";
import { ContentTypes } from "~/content-types";
import { Cafe } from "~/models";
import { deliveryClient } from "~/plugins/kentico-client";

@injectable()
export class CafeService implements ICafeService {

  public getAll = async () => {
    return deliveryClient.items<Cafe>()
    .type(ContentTypes.Cafe.codeName)
    .getPromise();
  }
}
