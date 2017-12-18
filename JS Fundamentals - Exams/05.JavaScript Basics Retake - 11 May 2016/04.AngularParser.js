function angularParser(angularData) {
    let applications = {};
    let controllers = {};
    let models = {};
    let views = {};

    for (let line of angularData) {
        if (line.startsWith('$app')) {
            let tokens = line.split('=');
            let appName = tokens[1].replace("'", "").replace("'", "");
            applications[appName] = {};
        } else if (line.startsWith('$controller')) {
            let tokens = line.split(`'`);
            let controllerName = tokens[1];
            let appName = tokens[3];
            if (!controllers[appName]) {
                controllers[appName] = [];
            }
            controllers[appName].push(controllerName);
        } else if (line.startsWith('$model')) {
            let tokens = line.split(`'`);
            let modelName = tokens[1];
            let appName = tokens[3];
            if (!models[appName]) {
                models[appName] = [];
            }
            models[appName].push(modelName);
        } else if (line.startsWith('$view')) {
            let tokens = line.split(`'`);
            let viewName = tokens[1];
            let appName = tokens[3];
            if (!views[appName]) {
                views[appName] = [];
            }
            views[appName].push(viewName);
        }
    }
    for (let application of Object.keys(applications)) {
        let controller = controllers[application] != undefined ?
            controllers[application].sort((a, b) => a.localeCompare(b)) : [];
        let model = models[application] != undefined ?
            models[application].sort((a, b) => a.localeCompare(b)) : [];
        let view = views[application] != undefined ?
            views[application].sort((a, b) => a.localeCompare(b)) : [];

        applications[application] = {
            controllers: controller,
            models: model,
            views: view
        };
    }

    applications = sortObject(applications);
    console.log(JSON.stringify(applications));

    function sortObject(applications) {
        return Object.keys(applications)
            .sort((a, b) => sortApps(a, b)).reduce(function(v, i) {
                v[i] = applications[i];
                return v;
            }, {});
    }

    function sortApps(a, b) {
        if (applications[a]['controllers'].length != applications[b]['controllers'].length) {
            return applications[b]['controllers'].length - applications[a]['controllers'].length;
        }

        return applications[a]['models'].length - applications[b]['models'].length;
    }
}
angularParser([`$app='MyApp'`,
    `$controller='My Controller'&app='MyApp'`,
    `$model='My Model'&app='MyApp'`,
    `$view='My View'&app='MyApp'`
]);
angularParser([`$controller='PHPController'&app='Language Parser'`,
    `$controller='JavaController'&app='Language Parser'`,
    `$controller='C#Controller'&app='Language Parser'`,
    `$controller='C++Controller'&app='Language Parser'`,
    `$app='Garbage Collector'`,
    `$controller='GarbageController'&app='Garbage Collector'`,
    `$controller='SpamController'&app='Garbage Collector'`,
    `$app='Language Parser'`
]);