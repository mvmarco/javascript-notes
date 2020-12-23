const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

const handleTabClick = (event) => {
  console.log(event.currentTarget);
  // hide all the tab panels when click to one specific (the tex t inside the button)
  tabPanels.forEach((tabPanel) => {
    tabPanel.hidden = true;
  });
  // mark all tabButtons as unselected - unselect aria-selected (the button itself is not yellow anymore)
  tabButtons.forEach((tabButton) => {
    // aria-selected if you $0.a....... you get camelCase the - can be converted in camelCase
    // also for aria-selected this wont work: tabButton.ariaSelected = false; while it works for title, source and alt
    // you must do the following:
    tabButton.setAttribute('aria-selected', false);
  });
  // mark the clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);
  // find the associated tabPanel and show it!
  // so we need to get the tabsButton with its ID and if it is present show the tabpanel with aria-labelledby='js'
  const { id } = event.currentTarget;
  const tbPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  console.log(tbPanel);
  tbPanel.hidden = false;
};

// when it is a button also the keyboard works for the click
tabButtons.forEach((button) => {
  button.addEventListener('click', handleTabClick);
});
