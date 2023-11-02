import Facebook from "./social_networks/facebook";
import HealthProfessional from "./health_professional";
import Instagram from "./social_networks/instagram";
import Linkedin from "./social_networks/linkedin";
import Tiktok from "./social_networks/tiktok";
import Twitter from "./social_networks/twitter";
import Search from "./search";
import Clear from "./clear";

export default {
    clear: Clear,
    facebook: Facebook,
    instagram: Instagram,
    linkedin: Linkedin,
    twitter: Twitter,
    tiktok: Tiktok,
    health_professional: HealthProfessional,
    search: Search,
};
