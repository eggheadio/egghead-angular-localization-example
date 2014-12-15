angular.module('app').controller('AnimalCtrl',
    ['$scope', 'locale', function ($scope, locale) {
        //Languages
        this.supportedLanguages = [
            {label: 'English', value: 'en-US'},
            {label: 'Spanish', value: 'es-MX'},
            {label: 'Swedish', value: 'sv-SE'}
        ];
        this.language = _.first(this.supportedLanguages);
        this.updateLocale = function (lang) {
            locale.setLocale(lang.value);
        };

        //Animals
        this.animals = [
            {name: 'Emperor Angel Fish', code: 'common.emperorAngelFish', img: 'http://www.reef.org/reef_files/enews/EmperorAngelfish_humann.jpg'},
            {name: 'Sea Turtle', code: 'common.seaTurtle', img: 'http://melinabeachturtlehatchery.files.wordpress.com/2010/07/turtle4.jpg'},
            {name: 'Manatee', code: 'common.manatee', img: 'http://i.huffpost.com/gen/1272530/thumbs/o-MANATEES-900.jpg?5'}
        ];

    }]);