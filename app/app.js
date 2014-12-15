angular.module('app', ['ngSanitize',
    'ngLocalize',
    'ngLocalize.Config',
    'ngLocalize.InstalledLanguages']).
    value('localeConf', {
        basePath: 'languages',
        defaultLocale: 'en-US',
        sharedDictionary: 'common',
        fileExtension: '.lang.json',
        observableAttrs: new RegExp('^data-(?!ng-|i18n)')
    }).
    value('localeSupported', [
        'en-US',
        'es-MX',
        'sv-SE'
    ]);

//Documentation for angular-localization is available at: https://github.com/doshprompt/angular-localization
//Installed languages are available at: http://msdn.microsoft.com/en-us/library/ee825488(v=cs.20).aspx