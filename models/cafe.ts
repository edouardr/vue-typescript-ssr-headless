import { ContentItem, Fields, FieldDecorators } from 'kentico-cloud-delivery-node-sdk';
import { ContentTypes } from '~/content-types'

export class Cafe extends ContentItem {
  public id: string
  public street: Fields.TextField;
  public city: Fields.TextField;
  public country: Fields.TextField;
  public state: Fields.TextField;

  @FieldDecorators.codename(ContentTypes.Cafe.fields.zipCode)
  public zipCode: Fields.TextField;
  public phone: Fields.TextField;
  public email: Fields.TextField;
  public photo: Fields.AssetsField;

  constructor() {
    super();
  }
}
