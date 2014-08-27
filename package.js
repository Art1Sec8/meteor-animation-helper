Package.describe({
    name: "mrt:animation-helper",
    summary: "Animates elements inside a {{> Animate}} block, by removing and adding an `animate` class.",
    version: "0.0.6",
    git: "https://github.com/frozeman/meteor-animation-helper.git"
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@0.9.0');

    // third party
    api.use('underscore', 'client');
    api.use('templating', 'client');
    api.use('jquery', 'client');

    api.use('sewdn:velocityjs@0.8.0', 'client');

    // FILES
    api.addFiles('animation-helper.html', 'client');
    api.addFiles('animation-helper.js', 'client');

});


Package.onTest(function (api) {
    // api.use('mrt:animation-helper');
    // api.use('tinytest');
});