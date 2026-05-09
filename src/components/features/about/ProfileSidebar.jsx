import React from "react";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";
import { FadeUp } from "../../Layout/AnimatedWrapper";
import heroImage from "../../../assets/images/heroImage.jpg"; // Adjust path

const ProfileSidebar = ({ info }) => {
  return (
    <FadeUp margin="-100px" className="space-y-8">
      {/* Portrait Image */}
      <div className="w-full aspect-[3/4] bg-neutral-900 rounded-sm overflow-hidden border border-theme-neutral-dark grayscale hover:grayscale-0 transition-all duration-700">
        <img
          src={heroImage} // Or info.profileImage if dynamically passing
          alt={info.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Quick Contact & Info Card */}
      <div className="bg-theme-neutral-dark/20 border border-theme-neutral-muted/30 p-6 rounded-sm space-y-6">
        <div>
          <h3 className="text-theme-heading text-xl mb-1">{info.name}</h3>
          <p className="text-secondary text-sm font-mono tracking-wider uppercase">
            {info.role}
          </p>
        </div>

        <div className="space-y-4 text-sm text-theme-neutral-light">
          {info.department && (
            <div className="flex items-start gap-3">
              <Building2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
              <p>{info.department}</p>
            </div>
          )}
          {info.address && (
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
              <p>{info.address}</p>
            </div>
          )}
          {info.email && (
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-theme-accent shrink-0" />
              <a
                href={`mailto:${info.email}`}
                className="hover:text-white transition-colors"
              >
                {info.email}
              </a>
            </div>
          )}
          {info.phone && (
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-theme-accent shrink-0" />
              <p>{info.phone}</p>
            </div>
          )}
        </div>
      </div>
    </FadeUp>
  );
};

export default ProfileSidebar;
