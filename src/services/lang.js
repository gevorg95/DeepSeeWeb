/**
 * Localization service. Also contains localization filter
 */
(function() {
    'use strict';

    function LangSvc( $window, LANGSTR) {
        //var settings = Storage.getAppSettings();
        var _this = this;
        this.getLanguages = getLanguages;
        this.get = get;
        //TODO: set angular $locale here

        //if (!settings.language) {
            switch ($window.navigator.language.toLowerCase()) {
                case "en":
                    this.current = "ru";
                    break;
                case "ru":
                    this.current = "ru";
                    break;
                case "de":
                    this.current = "de";
                    break;
                default:
                    this.current = "en";
                    break;
            }
        //} else this.current = settings.language || "en";

        /**
         * Translates string with current language
         * @param text string to translate
         * @returns {string} translated string
         */
        function get(text) {
            if (!LANGSTR[_this.current]) return text;
            if (!LANGSTR[_this.current][text]) return text;
            return LANGSTR[_this.current][text];
        }

        /**
         * Returns supported languages
         * @returns {Array} Supported languages
         */
        function getLanguages() {
            var langs = [];
            for (var l in LANGSTR) langs.push(l);
            return langs;
        }
    }

    /**
     * Angular filter function for language support
     * @param Lang
     * @returns {Function}
     * @constructor
     */
    function LangFlt(Lang) {
        return function(text) {
            return Lang.get(text);
        };
    }

    angular.module('app')
        .service('Lang', ['$window', 'LANGSTR', LangSvc])
        .filter('lang', ['Lang', LangFlt])

    /**
     * All language string constants
     */
        .constant('LANGSTR', {
            en: {
                saveFilters: "Save filters",
                exportSettings: 'Export settings',
                importSettings: 'Import settings',
                export: 'Export',
                pngImage: 'Image (*.png)',
                svgImage: 'Image (*.svg)',
                jpgImage: 'Image (*.jpg)',
                pdfDoc: 'Document (*.pdf)',
                xlsDoc: 'Document (*.xls)',
                csvDoc: 'Document (*.csv)',
                about: "About",
                cancel: "Cancel",
                save: "Save",
                load: "Load",
                share: "Share",
                //theme: "Theme",
                //view: "View",
                curSettings: "Current settings",
                newView: "New",
                language: "Language",
                dashboard: "Dashboard",
                folder: "Folder",
                signin: "Sign in",
                signout: "Sign out",
                login: "Login",
                password: "Password",
                namespace: "Namespace",
                loading: "Loading...",
                search: "Search",
                accept: "Accept",
                close: "Close",
                dismiss: "Dismiss",
                home: "Home",
                zoom: "Zoom",
                resetWidgets: "Reset widgets",
                resetTiles: "Reset tiles",
                addToFavorites: "Add to favorites",
                removeFromFav: "Remove from favorites",
                refresh: "Refresh",
                showFolders: "Show folders",
                showTop: "Show top items",
                viewAs: "View as",
                count: "Count",
                filters: "Filters",
                setDefault: "Reset to default",
                dashColumns: "Column count",
                widgetHeight: "Widget height(px)",
                noData: "No data to display",
                byRows: "Display by rows",
                by2columns: "Display by two columns",
                by3columns: "Display by three columns",
                print: "Print...",
                fav: "Favorites",
                options: "Settings",
                gotoDeepSee: "Goto DeepSee",
                showLegend: "On/off legend",
                showPivot: "Show as pivot table",
                back: "Back",
                exclude: "Exclude",
                all: "All",
                interval: "Interval",
                not: "Not",
                from: "From",
                to: "To",
                metroStyle: "Metro UI",
                bgColor: "Background color",
                fntColor: "Font color",
                icon: "Icon",
                done: "Done",
                widget: "Widget",
                showImages: "Show images",
                dataSource: "Data source",
                hideTitle: "Hide title",
                showZero: "Set axis minimum to zero",
                showValues: "Show values",
                err: "Error",
                errWidgetRequest: "Unable to load widget data",
                errLoginRequired: "Please enter login",
                errPassRequired: "Please enter password",
                errUnauth: "Incorrect username or password",
                errNotFound: "Requested url not fount on server",
                errTimeout: "Request timeout",
                errWidgetNotSupported: "Widget is not supported",
                errNoWidgets: "No widgets received from server",
                errNoDashboards: "No dashboards in this namespace",
                shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            },
            cs: {
                saveFilters: "Uložit filtry",
                exportSettings: 'Export nastavení',
                importSettings: 'Import nastavení',
                export: 'Export',
                pngImage: 'Image (*.png)',
                svgImage: 'Image (*.svg)',
                jpgImage: 'Image (*.jpg)',
                pdfDoc: 'Document (*.pdf)',
                xlsDoc: 'Document (*.xls)',
                csvDoc: 'Document (*.csv)',
                about: "O mě",
                cancel: "Zrušit",
                save: "Uložit",
                load: "Načíst",
                share: "Sdílet",
                //theme: "Téma",
                //view: "Pohled",
                curSettings: "Momentální nastavení",
                newView: "Nový",
                language: "Jazyky",
                dashboard: "Nástěnka",
                folder: "Složka",
                signin: "Přihlásit",
                signout: "Odhlásit",
                login: "Uživatelské jméno",
                password: "Heslo",
                namespace: "Namespace",
                loading: "Načítám...",
                search: "Hledat",
                accept: "Příjmout",
                close: "Zavřít",
                dismiss: "Zamítnout",
                home: "Domů",
                zoom: "Přiblížit",
                resetWidgets: "Reset Widgetů",
                resetTiles: "Reset Titulků",
                addToFavorites: "Přidat do oblíbených",
                removeFromFav: "Oddevrat z oblíbench",
                refresh: "Obnovit",
                showFolders: "Zobrazit složku",
                showTop: "Zobrazit první položky",
                viewAs: "Zobrazit jako",
                count: "Počet",
                filters: "Filtry",
                setDefault: "Obnovit výchozí",
                dashColumns: "Počet slouců",
                widgetHeight: "Výška widgetu(px)",
                noData: "Nejsou data k zobrazení",
                byRows: "Zobrazit řádky",
                by2columns: "Zobrazit podle dvou sloupců",
                by3columns: "Zobrazit podle tří sloupců",
                print: "Tisk...",
                fav: "Oblíbené",
                options: "Nastavení",
                gotoDeepSee: "Přejít do DeepSee",
                showLegend: "Zapnout/Vypnout Legendu",
                showPivot: "Zobrazit jako kontingenční tabulku",
                back: "Zpět",
                exclude: "Vyloučit",
                all: "Vše",
                interval: "Interval",
                not: "Not",
                from: "Od",
                to: "Do",
                metroStyle: "Metro UI",
                bgColor: "Barva pozadí",
                fntColor: "Barva písma",
                icon: "Ikona",
                done: "Hotovo",
                widget: "Widget",
                showImages: "Zobrazit obrázky",
                dataSource: "Zdroje dat",
                hideTitle: "Skrýt titulek",
                showZero: "Nastavt minimum osy na nulu",
                showValues: "Zobrazit hodnoty",
                err: "Error",
                errWidgetRequest: "Nelze načíst data widgetu",
                errLoginRequired: "Prosím, zadejte přihlašovací jméno",
                errPassRequired: "Prosím zadejte heslo",
                errUnauth: "Nesprávné uživatelské jméno nebo heslo",
                errNotFound: "Požadovaná adresa URL nbyla nalezena na serveru",
                errTimeout: "vypršel čas Requestu",
                errWidgetNotSupported: "Widget není podporován",
                errNoWidgets: "Žádné přijaté widgety ze serveru",
                errNoDashboards: "Žádné nástěnky v namespace",
                shortMonths: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"]
            },
            ru: {
                saveFilters: "Сохранять фильтры",
                exportSettings: 'Экспорт настроек',
                importSettings: 'Импорт настроек',
                export: 'Экспорт',
                pngImage: 'Картинка (*.png)',
                svgImage: 'Картинка (*.svg)',
                jpgImage: 'Картинка (*.jpg)',
                pdfDoc: 'Документ (*.pdf)',
                xlsDoc: 'Документ (*.xls)',
                csvDoc: 'Документ (*.csv)',
                about: "О программе",
                cancel: "Отмена",
                save: "Сохранить",
                load: "Загрузить",
                share: "Поделиться",
                //theme: "Тема",
                //view: "Представление",
                curSettings: "Текущие настройки",
                newView: "Добавить",
                language: "Язык",
                dashboard: "Индикаторная панель",
                folder: "Папка",
                signin: "Вход",
                signout: "Выход",
                login: "Логин",
                password: "Пароль",
                namespace: "Область",
                loading: "Загрузка...",
                search: "Поиск",
                accept: "Принять",
                close: "Закрыть",
                dismiss: "Сбросить",
                home: "Домой",
                zoom: "Увеличение",
                refresh: "Обновить",
                resetWidgets: "Сбросить виджеты",
                resetTiles: "Сбросить тайлы",
                addToFavorites: "Добавить в избраное",
                removeFromFav: "Удалить из избраного",
                showFolders: "Отображать папки",
                showTop: "Показать только верхние",
                viewAs: "Отобразить как",
                count: "Кол-во",
                filters: "Фильтры",
                setDefault: "Установить по умолчанию",
                dashColumns: "Колонки",
                widgetHeight: "Высота виджетов(px)",
                noData: "Нет данных",
                byRows: "Отобразить построчно",
                by2columns: "Отобразить двумя колонками",
                by3columns: "Отобразить тремя колонками",
                print: "Печать...",
                fav: "Избраное",
                options: "Настройки",
                gotoDeepSee: "Перейти в DeepSee",
                showLegend: "Вкл/выкл легенду",
                showPivot: "Показать как таблицу",
                back: "Назад",
                exclude: "Исключить",
                all: "Все",
                not: "Не",
                interval: "Интервал",
                from: "От",
                to: "До",
                metroStyle: "Стиль Metro",
                bgColor: "Цвет фона",
                fntColor: "Цвет шрифта",
                icon: "Значок",
                done: "Готово",
                widget: "Виджет",
                showImages: "Отображать картинки",
                dataSource: "Источник данных",
                hideTitle: "Скрывать заголовок",
                showZero: "Отображать 0 на оси",
                showValues: "Отображать значения",
                err: "Ошибка",
                errWidgetRequest: "Невозможо получить данные виджета",
                errLoginRequired: "Пожалуйста введите логин",
                errPassRequired: "Пожалуйста введите пароль",
                errUnauth: "Неверный логин или пароль",
                errNotFound: "Заданый адрес не найден на сервере",
                errTimeout: "Превышен интервал ожидания запроса",
                errWidgetNotSupported: "Виджет не поддерживается",
                errNoWidgets: "Сервер вернул пустой список виджетов",
                errNoDashboards: "В данной обласни нет дашбордов",
                shortMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"]
            }
        });

})();