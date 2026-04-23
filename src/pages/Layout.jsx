
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Brain, 
  LayoutDashboard, 
  Upload, 
  FileText, 
  Settings,
  BookOpen,
  BarChart3,
  FileCheck,
  Clock,
  ClipboardEdit,
  Database
} from "lucide-react";

import AccountSettingsModal from "./components/account/AccountSettingsModal";

const navigationItems = [
  {
    title: "Dashboard",
    url: createPageUrl("Dashboard"),
    icon: LayoutDashboard,
  },
  {
    title: "Upload & Extract",
    url: createPageUrl("Upload"),
    icon: Upload,
  },
  {
    title: "Manual Entry",
    url: createPageUrl("ManualEntry"),
    icon: ClipboardEdit,
  },
  {
    title: "Reports",
    url: createPageUrl("Reports"),
    icon: FileText,
  },
  {
    title: "Report Templates",
    url: createPageUrl("Templates"),
    icon: BookOpen,
  },
  {
    title: "Test Bank",
    url: createPageUrl("TestBank"),
    icon: Database,
  },
  {
    title: "Score Descriptors",
    url: createPageUrl("ScoreReference"),
    icon: BarChart3,
  }
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [showAccountSettings, setShowAccountSettings] = useState(false);

  return (
    <>
      <style>{`
        :root {
          --primary-blue: #1e40af;
          --secondary-blue: #3b82f6;
          --light-blue: #dbeafe;
          --accent-blue: #60a5fa;
          --text-primary: #1f2937;
          --text-secondary: #6b7280;
          --background: #f8fafc;
          --card-background: #ffffff;
        }
      `}</style>
      <div className="min-h-screen flex w-full" style={{backgroundColor: 'var(--background)'}}>
        {/* Always Visible Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
          {/* Sidebar Header */}
          <div className="border-b border-gray-200 p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background: 'linear-gradient(135deg, var(--primary-blue), var(--secondary-blue))'}}>
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-lg" style={{color: 'var(--text-primary)'}}>PsychScore Pro</h2>
                <p className="text-xs" style={{color: 'var(--text-secondary)'}}>Assessment Scoring Platform</p>
              </div>
            </div>
          </div>
          
          {/* Navigation Menu */}
          <div className="flex-1 p-4">
            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-wider px-2 py-2" style={{color: 'var(--text-secondary)'}}>
                Navigation
              </p>
              <div className="space-y-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.url}
                    className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                      location.pathname === item.url 
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600' 
                        : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="border-t border-gray-200 p-4">
            <div 
              className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200"
              onClick={() => setShowAccountSettings(true)}
            >
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-medium text-sm">Dr</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate" style={{color: 'var(--text-primary)'}}>Psychologist</p>
                <p className="text-xs truncate" style={{color: 'var(--text-secondary)'}}>Assessment Platform</p>
              </div>
              <Settings className="w-4 h-4" style={{color: 'var(--text-secondary)'}} />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>

      {/* Account Settings Modal */}
      <AccountSettingsModal 
        isOpen={showAccountSettings}
        onClose={() => setShowAccountSettings(false)}
      />
    </>
  );
}
