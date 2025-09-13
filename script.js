let selectedMenu = "dashboard-menu";
const elementsToHide = document.getElementsByClassName("collapsed-name");

function toggleSidebar(title) {
  if ($("#sidebar").is(":hidden")) {
    $("#sidebar").show();
    $("#sidebar1").hide();
  } else {
    $("#sidebar1").show();
    $("#sidebar").hide();
  }
  $(`#selected-menu-arrow`).toggleClass("left");
  changeMenuList(selectedMenu, title);
}

const fixedMenu = [
  {
    icon: "fas fa-home fa-icon company-logo",
    action: "",
    key: "",
  },
  {
    icon: "fa-solid fa-grip fa-icon",
    key: "Dashboard",
    action: "changeMenuList('dashboard-menu','Dashboard')",
  },
  {
    icon: "fa-regular fa-file-zipper fa-icon",
    key: "Tasks",
    action: "changeMenuList('tasks-menu','Tasks')",
  },
  {
    icon: "fa-solid fa-gear fa-icon",
    key: "Settings",
    action: "changeMenuList('settings-menu','Settings')",
  },
  {
    icon: "fa-regular fa-circle-user fa-icon",
    key: "Profile",
    action: "changeMenuList('profile-menu','Profile')",
  },
];

const dashboardSubMenu = [
  {
    icon: "arrow right",
    action: "toggleSidebar('Dashboard')",
    key: "",
  },
  {
    icon: "fa-solid fa-magnifying-glass fa-icon",
    action: "toggleSidebar('Dashboard')",
    key: "",
  },
  {
    icon: "fa-solid fa-eye fa-icon",
    action: "toggleSidebar('Dashboard')",
    key: "",
  },
  {
    icon: "fa-solid fa-rectangle-list fa-icon",
    action: "toggleSidebar('Dashboard')",
    key: "",
  },
  {
    icon: "fa-solid fa-rectangle-list fa-icon",
    action: "toggleSidebar('Dashboard')",
    key: "",
  },
  {
    icon: "fa-solid fa-rectangle-list fa-icon",
    action: "toggleSidebar('Dashboard')",
    key: "",
  },
];

const tasksSubMenu = [
  {
    icon: "arrow right",
    action: "toggleSidebar('Tasks')",
    key: "",
  },
  {
    icon: "fa-solid fa-magnifying-glass fa-icon",
    action: "toggleSidebar('Tasks')",
    key: "",
  },
  {
    icon: "fa fa-plus",
    action: "toggleSidebar('Tasks')",
    key: "",
  },
  {
    icon: "fa fa-filter",
    action: "toggleSidebar('Tasks')",
    key: "",
  },
  {
    icon: "fa fa-calendar",
    action: "toggleSidebar('Tasks')",
    key: "",
  },
  {
    icon: "fa fa-spinner",
    action: "toggleSidebar('Tasks')",
    key: "",
  },
  {
    icon: "fa fa-vimeo-square",
    action: "toggleSidebar('Tasks')",
    key: "",
  },
  {
    icon: "fa fa-shopping-basket",
    action: "toggleSidebar('Tasks')",
    key: "",
  },
  {
    icon: "fa fa-archive",
    action: "toggleSidebar('Tasks')",
    key: "",
  },
];

const settingsSubMenu = [
  {
    icon: "arrow right",
    action: "toggleSidebar('Settings')",
    key: "",
  },
  {
    icon: "fa-solid fa-magnifying-glass fa-icon",
    action: "toggleSidebar('Settings')",
    key: "",
  },
  {
    icon: "fa fa-mars",
    action: "toggleSidebar('Settings')",
    key: "",
  },
];

const profileSubMenu = [
  {
    icon: "arrow right",
    action: "toggleSidebar('Profile')",
    key: "",
  },
  {
    icon: "fa-solid fa-magnifying-glass fa-icon",
    action: "toggleSidebar('Profile')",
    key: "",
  },
  {
    icon: "fa fa-trophy",
    action: "toggleSidebar('Profile')",
    key: "",
  },
];

//common ul
const addToMainMenu = (item) => {
  return (
    '<ul onclick="' +
    item.action +
    '"><i class="' +
    item.icon +
    ' remove-cursor"></i></ul>'
  );
};

//set main menu
function setMainMenu() {
  fixedMenu.slice(0, 1)?.forEach((item) => {
    $("#top-menu").append(addToMainMenu(item));
  });
  fixedMenu.slice(1, -2)?.forEach((item) => {
    $("#top-menu").append(addToMainMenu(item));
  });
  fixedMenu.slice(-2)?.forEach((item) => {
    $("#bottom-menu").append(addToMainMenu(item));
  });
}

//set siderbar
function setSubMenu() {
  dashboardSubMenu?.forEach((item) => {
    $("#dashboard-menu").append(addToMainMenu(item));
  });
  tasksSubMenu?.forEach((item) => {
    $("#tasks-menu").append(addToMainMenu(item));
  });
  profileSubMenu?.forEach((item) => {
    $("#profile-menu").append(addToMainMenu(item));
  });
  settingsSubMenu?.forEach((item) => {
    $("#settings-menu").append(addToMainMenu(item));
  });
}

let dashboardSubMenuWithTabName = [
  [
    {
      icon: "fa-solid fa-eye fa-icon",
      action: "goto('Overview')",
      key: "Overview",
      name: "Overview",
      type: "Dashboard Types",
    },
    {
      icon: "fa-solid fa-rectangle-list fa-icon",
      action: "",
      key: "Executive-Summary",
      name: "Executive Summary",
      type: "Dashboard Types",
      subtab: [
        "Revenue Overview",
        "Key Performance Indicator",
        "Strategic Goals Progress",
        "Department Highlights",
      ],
    },
  ],
  [
    {
      icon: "fa-solid fa-rectangle-list fa-icon",
      action: "",
      key: "Weekly-Report",
      name: "Weekly Report",
      type: "Report Summaries",
      subtab: [
        "Revenue Overview",
        "Key Performance Indicator",
        "Strategic Goals Progress",
        "Department Highlights",
      ],
    },
  ],
  [
    {
      icon: "fa-solid fa-rectangle-list fa-icon",
      action: "",
      key: "Performance-Metrics",
      name: "Performance Metrics",
      type: "Business Intelligence",
      subtab: [
        "Revenue Overview",
        "Key Performance Indicator",
        "Strategic Goals Progress",
        "Department Highlights",
      ],
    },
  ],
];

const tasksSubMenuWithTabName = [
  [
    {
      icon: "fa fa-plus",
      action: "goto('New task')",
      key: "New-task",
      name: "New task",
      type: "Quick Actions",
    },
    {
      icon: "fa fa-filter",
      action: "goto('Filter tasks')",
      key: "Filter-tasks",
      name: "Filter tasks",
      type: "Quick Actions",
    },
  ],
  [
    {
      icon: "fa fa-calendar",
      action: "",
      key: "Due-today",
      name: "Due today",
      type: "My Tasks",
      subtab: ["Due today 1", "Due today 2"],
    },
    {
      icon: "fa fa-spinner",
      action: "",
      key: "In-progress",
      name: "In progress",
      type: "My Tasks",
      subtab: ["In progress 1", "In progress 2"],
    },
    {
      icon: "fa fa-vimeo-square",
      action: "",
      key: "Completed",
      name: "Completed",
      type: "My Tasks",
      subtab: ["Completed 1", "Completed 2"],
    },
  ],
  [
    {
      icon: "fa fa-shopping-basket",
      action: "",
      key: "Priority-tasks",
      name: "Priority tasks",
      type: "Other",
      subtab: ["Priority tasks 1", "Priority tasks 2", "Priority tasks 3"],
    },
    {
      icon: "fa fa-archive",
      action: "goto('Archived')",
      key: "Archived",
      name: "Archived",
      type: "Other",
    },
  ],
];
const profileSubMenuWithTabName = [
  [
    {
      icon: "fa fa-trophy",
      action: "goto('Activity')",
      key: "Activity",
      name: "Activity",
      type: "Extra Activity",
    },
  ],
];

const settingsSubMenuWithTabName = [
  [
    {
      icon: "fa fa-mars",
      action: "goto('Restore')",
      key: "Restore",
      name: "Restore",
      type: "Details",
    },
  ],
];

// toggle siderbar1
function openHideSubList(id) {
  if ($(`#${id}`).is(":hidden")) {
    $(`#${id}`).show();
  } else {
    $(`#${id}`).hide();
  }
  $(`#${id}arrow`).toggleClass("up");
}

function setSubMenuList() {
  // ====dashboard=====
  dashboardSubMenuWithTabName?.forEach((list) => {
    $("#dashboard-menu1").append(
      '<div class="menu-type">' + list[0].type + "</div>"
    );
    list?.forEach((item) => {
      if (item?.subtab?.length > 0) {
        $("#dashboard-menu1").append(
          '<div class="sub-menu-list-info" onclick="' + item.action + '">'
        );
        $("#dashboard-menu1").append(
          '<div class="sub-menu-list-title" onclick="openHideSubList(\'' +
            item.key +
            '\')"><i class="' +
            item.icon +
            '"></i><div class="sub-menu-title">' +
            item.name +
            '</div><i class="arrow down" id="' +
            item.key +
            'arrow"></i></div>'
        );
        $("#dashboard-menu1").append(
          '<div class="hidden" id="' + item.key + '"></div>'
        );
        item.subtab.forEach((tab) => {
          $(`#${item.key}`).append(
            '<div class="sub-tab-name" onclick="goto(\'' +
              tab +
              "')\" >" +
              tab +
              "</div>"
          );
        });
        $("#dashboard-menu1").append("</div>");
        $(`#${item.key}`).hide();
      } else {
        $("#dashboard-menu1").append(
          '<div class="single-menu" onclick="' +
            item.action +
            '"><i class="' +
            item.icon +
            '"></i><div class="menu-name">' +
            item.name +
            "</div></div>"
        );
      }
    });
  });

  //   ====tasks=====
  tasksSubMenuWithTabName?.forEach((list) => {
    $("#tasks-menu1").append(
      '<div class="menu-type">' + list[0].type + "</div>"
    );
    list?.forEach((item) => {
      if (item?.subtab?.length > 0) {
        $("#tasks-menu1").append(
          '<div class="sub-menu-list-info" onclick="' + item.action + '">'
        );
        $("#tasks-menu1").append(
          '<div class="sub-menu-list-title" onclick="openHideSubList(\'' +
            item.key +
            '\')"><i class="' +
            item.icon +
            '"></i><div class="sub-menu-title">' +
            item.name +
            '</div><i class="arrow down" id="' +
            item.key +
            'arrow"></i></div>'
        );
        $("#tasks-menu1").append(
          '<div class="hidden" id="' + item.key + '"></div>'
        );
        item.subtab.forEach((tab) => {
          $(`#${item.key}`).append(
            '<div class="sub-tab-name" onclick="goto(\'' +
              tab +
              "')\" >" +
              tab +
              "</div>"
          );
        });
        $("#tasks-menu1").append("</div>");
        $(`#${item.key}`).hide();
      } else {
        $("#tasks-menu1").append(
          '<div class="single-menu" onclick="' +
            item.action +
            '"><i class="' +
            item.icon +
            '"></i><div class="menu-name">' +
            item.name +
            "</div></div>"
        );
      }
    });
  });

  //   ====profile=====
  profileSubMenuWithTabName?.forEach((list) => {
    $("#profile-menu1").append(
      '<div class="menu-type">' + list[0].type + "</div>"
    );
    list?.forEach((item) => {
      if (item?.subtab?.length > 0) {
        $("#profile-menu1").append(
          '<div class="sub-menu-list-info" onclick="' + item.action + '">'
        );
        $("#profile-menu1").append(
          '<div class="sub-menu-list-title" onclick="openHideSubList(\'' +
            item.key +
            '\')"><i class="' +
            item.icon +
            '"></i><div class="sub-menu-title">' +
            item.name +
            '</div><i class="arrow down" id="' +
            item.key +
            'arrow"></i></div>'
        );
        $("#profile-menu1").append(
          '<div class="hidden" id="' + item.key + '"></div>'
        );
        item.subtab.forEach((tab) => {
          $(`#${item.key}`).append(
            '<div class="sub-tab-name" onclick="goto(\'' +
              tab +
              "')\">" +
              tab +
              "</div>"
          );
        });
        $("#profile-menu1").append("</div>");
        $(`#${item.key}`).hide();
      } else {
        $("#profile-menu1").append(
          '<div class="single-menu" onclick="' +
            item.action +
            '"><i class="' +
            item.icon +
            '"></i><div class="menu-name">' +
            item.name +
            "</div></div>"
        );
      }
    });
  });

  //   ====profile=====
  settingsSubMenuWithTabName?.forEach((list) => {
    $("#settings-menu1").append(
      '<div class="menu-type">' + list[0].type + "</div>"
    );
    list?.forEach((item) => {
      if (item?.subtab?.length > 0) {
        $("#settings-menu1").append(
          '<div class="sub-menu-list-info" onclick="' + item.action + '">'
        );
        $("#settings-menu1").append(
          '<div class="sub-menu-list-title" onclick="openHideSubList(\'' +
            item.key +
            '\')"><i class="' +
            item.icon +
            '"></i><div class="sub-menu-title">' +
            item.name +
            '</div><i class="arrow down" id="' +
            item.key +
            'arrow"></i></div>'
        );
        $("#settings-menu1").append(
          '<div class="hidden" id="' + item.key + '"></div>'
        );
        item.subtab.forEach((tab) => {
          $(`#${item.key}`).append(
            '<div class="sub-tab-name" onclick="goto(\'' +
              tab +
              "')\" >" +
              tab +
              "</div>"
          );
        });
        $("#settings-menu1").append("</div>");
        $(`#${item.key}`).hide();
      } else {
        $("#settings-menu1").append(
          '<div class="single-menu" onclick="' +
            item.action +
            '"><i class="' +
            item.icon +
            '"></i><div class="menu-name">' +
            item.name +
            "</div></div>"
        );
      }
    });
  });
}

// action on main menu
function changeMenuList(selectedTab, title) {
  document.getElementById("selected-menu").innerHTML = title;
  selectedMenu = selectedTab;

  if (isMobile()) {
    document.getElementById("sidebar").classList.remove("hide-side-bar");
    document.getElementById("sidebar1").classList.remove("hide-side-bar");
    $("#sidebar1").show();
    $("#sidebar").hide();
    $("#toggle-btn").hide();
  }

  if ($("#sidebar").is(":hidden")) {
    const elementsToHide = document.querySelectorAll(".sub-menu-list");
    elementsToHide.forEach((element) => {
      element.style.display = "none";
    });
    document.getElementById(`${selectedTab}1`).style.display = "block";
  } else {
    const elementsToHide = document.querySelectorAll(".sub-menu-icon");
    elementsToHide.forEach((element) => {
      element.style.display = "none";
    });
    document.getElementById(selectedTab).style.display = "flex";
  }
}

// action on subtab
function goto(tab) {
  const el = document.getElementById(tab.split(" ").join(""));
  if (isMobile()) {
    $("#sidebar1").hide();
    $("#sidebar").hide();
  } else {
    $("#sidebar1").hide();
    $("#sidebar").show();
  }
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

// =====call function on page load on dom ===============

document.addEventListener("DOMContentLoaded", function () {
  setMainMenu();
  setSubMenu();
  setSubMenuList();
  //   display dashboard menu default
  const elementsToHide = document.querySelectorAll(".sub-menu-icon");
  elementsToHide.forEach((element) => {
    element.style.display = "none";
  });
  document.getElementById("dashboard-menu").style.display = "flex";

  const elementsToHide1 = document.querySelectorAll(".sub-menu-list");
  elementsToHide1.forEach((element) => {
    element.style.display = "none";
  });
  document.getElementById("dashboard-menu1").style.display = "block";
  $("#sidebar1").hide();
});

function searchInList(e) {
  console.log("called");
  const TabName = $("#selected-menu").text();
  const searched = $("#search-value").val();
  console.log(TabName, searched);
  let x = dashboardSubMenuWithTabName.map((item) => {
    const y = item.filter((tab) =>
      tab.name.toLocaleLowerCase().includes(searched)
    );
    console.log(y);
    return y.length > 0 ? y : null;
  });
  console.log(x.filter(Boolean));
  dashboardSubMenuWithTabName = x.filter(Boolean);
}
