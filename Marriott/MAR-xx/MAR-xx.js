// Is this possible On RLM, default to Standard Rates tab.
// Exclude points and special rates searches.
// Limit the experience to visits in which users don’t already land on that tab.
// Might be more challenging



// courtyard atlanta midtown


// append each button href with &defaultTab=default
document.querySelectorAll('.js-view-rate-btn-link').forEach(function(el){
    el.href = el.href + '&defaultTab=default'
})


// there is also another button when clicking the 'view hotel details' page