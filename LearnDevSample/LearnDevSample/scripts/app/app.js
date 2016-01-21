// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
define(["require", "exports", "app/friends", "app/profile", "app/items"], function (require, exports, Friends, Profile, Items) {
    var profile = ReactDOM.render(React.createElement(Profile.DevLearnProfile, {"defaultCourses": 10, "defaultArticles": 13}), document.getElementById("profileNode"));
    var coursesData = [
        { title: 'Front-End Web Development Quick Start With HTML5, CSS, and JavaScript', href: 'https://app.pluralsight.com/library/courses/front-end-web-app-html5-javascript-css', description: "I haven't finished this one, but so far it seems interesting.  It's nice having a primer on HTML5 and CSS3.", rating: 4 },
        { title: 'Front-End Web Development Quick Start With HTML5, CSS, and JavaScript', href: 'https://app.pluralsight.com/library/courses/front-end-web-app-html5-javascript-css', description: "I haven't finished this one, but so far it seems interesting.  It's nice having a primer on HTML5 and CSS3.", rating: 4 },
        { title: 'Front-End Web Development Quick Start With HTML5, CSS, and JavaScript', href: 'https://app.pluralsight.com/library/courses/front-end-web-app-html5-javascript-css', description: "I haven't finished this one, but so far it seems interesting.  It's nice having a primer on HTML5 and CSS3.", rating: 4 },
        { title: 'Front-End Web Development Quick Start With HTML5, CSS, and JavaScript', href: 'https://app.pluralsight.com/library/courses/front-end-web-app-html5-javascript-css', description: "I haven't finished this one, but so far it seems interesting.  It's nice having a primer on HTML5 and CSS3.", rating: 4 },
        { title: 'Front-End Web Development Quick Start With HTML5, CSS, and JavaScript', href: 'https://app.pluralsight.com/library/courses/front-end-web-app-html5-javascript-css', description: "I haven't finished this one, but so far it seems interesting.  It's nice having a primer on HTML5 and CSS3.", rating: 4 }
    ];
    var articlesData = [
        { title: "Visual Studio 2015 - Can't sign in, Use NuGet, etc. behind Corporate Proxy", href: "http://stackoverflow.com/questions/31571224/visual-studio-2015-cant-sign-in-use-nuget-etc-behind-corporate-proxy", rating: 4.5, description: "The accepted answer has a helpful tip on how to get this working.  Has to do with out-of-date firewall?" },
        { title: "Visual Studio 2015 - Can't sign in, Use NuGet, etc. behind Corporate Proxy", href: "http://stackoverflow.com/questions/31571224/visual-studio-2015-cant-sign-in-use-nuget-etc-behind-corporate-proxy", rating: 4.5, description: "The accepted answer has a helpful tip on how to get this working.  Has to do with out-of-date firewall?" },
        { title: "Visual Studio 2015 - Can't sign in, Use NuGet, etc. behind Corporate Proxy", href: "http://stackoverflow.com/questions/31571224/visual-studio-2015-cant-sign-in-use-nuget-etc-behind-corporate-proxy", rating: 4.5, description: "The accepted answer has a helpful tip on how to get this working.  Has to do with out-of-date firewall?" },
        { title: "Visual Studio 2015 - Can't sign in, Use NuGet, etc. behind Corporate Proxy", href: "http://stackoverflow.com/questions/31571224/visual-studio-2015-cant-sign-in-use-nuget-etc-behind-corporate-proxy", rating: 4.5, description: "The accepted answer has a helpful tip on how to get this working.  Has to do with out-of-date firewall?" },
        { title: "Visual Studio 2015 - Can't sign in, Use NuGet, etc. behind Corporate Proxy", href: "http://stackoverflow.com/questions/31571224/visual-studio-2015-cant-sign-in-use-nuget-etc-behind-corporate-proxy", rating: 4.5, description: "The accepted answer has a helpful tip on how to get this working.  Has to do with out-of-date firewall?" },
        { title: "Visual Studio 2015 - Can't sign in, Use NuGet, etc. behind Corporate Proxy", href: "http://stackoverflow.com/questions/31571224/visual-studio-2015-cant-sign-in-use-nuget-etc-behind-corporate-proxy", rating: 4.5, description: "The accepted answer has a helpful tip on how to get this working.  Has to do with out-of-date firewall?" }
    ];
    var itemsComponent = ReactDOM.render(React.createElement(Items.Items, null), document.getElementById('coursesNode'));
    var articlesComponent = ReactDOM.render(React.createElement(Items.Items, null), document.getElementById('articlesNode'));
    itemsComponent.updateData(coursesData);
    articlesComponent.updateData(articlesData);
    var friendsData = [
        { id: 1, name: 'Homer Simpson', initials: 'HS', courses: 14, articles: 40 },
        { id: 2, name: 'Marge Simpson', initials: 'MS', courses: 25, articles: 40 }
    ];
    ReactDOM.render(React.createElement(Friends.Friends, {"initialData": friendsData}), document.getElementById('friendsNode'));
});
//# sourceMappingURL=app.js.map