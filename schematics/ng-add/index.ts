import { pkgName, pkgVer, moduleName } from './../utils/lib-details';
import { install } from '@syncfusion/ej2-ng-base/schematics';
import { OptionsSchema, LibOptionsSchema } from './schema';
import { Rule } from '@angular-devkit/schematics';

export default function (options: OptionsSchema): Rule {
	const libOptions: LibOptionsSchema = Object.assign({},
		{ 'pkgName': pkgName, 'pkgVer': pkgVer, 'moduleName': moduleName });
	return install(options, libOptions);
}
