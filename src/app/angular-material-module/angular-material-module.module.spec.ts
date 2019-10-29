import { AngularMaterialModuleModule } from './angular-material-module.module';

describe('AngularMaterialModuleModule', () => {
  let angularMaterialModuleModule: AngularMaterialModuleModule;

  beforeEach(() => {
    angularMaterialModuleModule = new AngularMaterialModuleModule();
  });

  it('should create an instance', () => {
    expect(angularMaterialModuleModule).toBeTruthy();
  });
});
