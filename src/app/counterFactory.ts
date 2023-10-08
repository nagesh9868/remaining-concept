import { ProviderService } from "./services/provider.service";
import { ProviderService2 } from "./services/provider.service2";
import { testservice } from "./services/test.servie";

export const counterFactory = {provide:ProviderService, useFactory: (_testService:testservice)=> _testService?.status? new ProviderService2() : new ProviderService(), deps:[testservice]}