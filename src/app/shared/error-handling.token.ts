import { InjectionToken } from '@angular/core';

import { ErrorHandlingDirective } from './directives/error-handling.directive';

export const ERROR_HANDLING_DIRECTIVE = new InjectionToken<ErrorHandlingDirective>('ErrorHandlingDirective');
