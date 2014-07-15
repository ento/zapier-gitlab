var Zap = {
    new_commits_catch_hook: function(bundle) {
        bundle.cleaned_request.onelines = _.map(bundle.cleaned_request.commits, function(each) {
          return each.id.substr(0, 7) + " " + each.message;
        });
        return bundle.cleaned_request;
    }
    
};

