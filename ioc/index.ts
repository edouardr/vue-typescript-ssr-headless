import { Container } from "inversify";
import getDecorators from "inversify-inject-decorators";
import { CafeService } from "~/api/cafe-service";
import { ICafeService } from "~/api/icafe-service";
import { Symbols } from "~/constants";

const container = new Container();

container.bind<ICafeService>(Symbols.SERVICES.CAFE).to(CafeService);

const { lazyInject } = getDecorators(container);

export { container, lazyInject };
