import vueIcon from "@iconify-icons/logos/vue";
import bootstrapIcon from "@iconify-icons/logos/bootstrap";
import tailwindcssIcon from "@iconify-icons/logos/tailwindcss-icon";
import javascriptIcon from "@iconify-icons/logos/javascript";
import typescriptIcon from "@iconify-icons/devicon/typescript";
import phpIcon from "@iconify-icons/devicon/php";
import laravelIcon from "@iconify-icons/logos/laravel";
import html5Icon from "@iconify-icons/devicon/html5";
import cssIcon from "@iconify-icons/devicon/css3";
import hamburgerLg from "@iconify-icons/ci/hamburger-lg";
import closeLg from "@iconify-icons/ci/close-lg";

const icons = {
    laravel: laravelIcon,
    php: phpIcon,
    vue: vueIcon,
    bootstrap: bootstrapIcon,
    tailwind: tailwindcssIcon,
    javascript: javascriptIcon,
    typescript: typescriptIcon,
    html: html5Icon,
    css: cssIcon,
    menu: hamburgerLg,
    close: closeLg,
};

export const convertIcons = iconName => icons[iconName];
