import { inject, injectable } from 'inversify'
import { deliveryClient } from '~/plugins/kentico-client'
import { ICafeService } from 'api/icafe-service';
import { ContentTypes } from '~/content-types';
import { Cafe } from '~/models'

@injectable()
export class CafeService implements ICafeService {

  public getAll = async () => {
    return deliveryClient.items<Cafe>()
    .type(ContentTypes.Cafe.codeName)
    .getPromise()
  }
}
