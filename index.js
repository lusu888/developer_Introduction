window.onload = function() {
  $('body').bsgdprcookies({
    allowAdvancedOptions: true,
      advancedTitle: 'Select which cookies you want to accept',
      advancedAutoOpenDelay: 1000,
      advancedButtonLabel: 'Customize',
      advancedCookiesToSelect: [
        {
            name: 'necessary',
            title: 'Necessary',
            description: 'Required for the site to work properly',
            isFixed: true
        },
        {
            name: 'preferences',
            title: 'Site Preferences',
            description: 'Required for saving your site preferences, e.g. remembering your username etc.',
            isFixed: false
        },
        {
            name: 'analytics',
            title: 'Analytics',
            description: 'Required to collect site visits, browser types, etc.',
            isFixed: false
        },
        {
            name: 'marketing',
            title: 'Marketing',
            description: 'Required to marketing, e.g. newsletters, social media, etc',
            isFixed: false
        }
      ],

  });

}

