import Layout from "./Layout.jsx";

import Dashboard from "./Dashboard";

import Upload from "./Upload";

import Reports from "./Reports";

import Templates from "./Templates";

import ScoreReference from "./ScoreReference";

import TemplateEditor from "./TemplateEditor";

import MyDescriptors from "./MyDescriptors";

import GenerateReport from "./GenerateReport";

import ViewReport from "./ViewReport";

import ManualEntry from "./ManualEntry";

import TestBank from "./TestBank";

import BulkUpdateTestBank from "./BulkUpdateTestBank";

import ManageTestBankVisibility from "./ManageTestBankVisibility";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Dashboard: Dashboard,
    
    Upload: Upload,
    
    Reports: Reports,
    
    Templates: Templates,
    
    ScoreReference: ScoreReference,
    
    TemplateEditor: TemplateEditor,
    
    MyDescriptors: MyDescriptors,
    
    GenerateReport: GenerateReport,
    
    ViewReport: ViewReport,
    
    ManualEntry: ManualEntry,
    
    TestBank: TestBank,
    
    BulkUpdateTestBank: BulkUpdateTestBank,
    
    ManageTestBankVisibility: ManageTestBankVisibility,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Dashboard />} />
                
                
                <Route path="/Dashboard" element={<Dashboard />} />
                
                <Route path="/Upload" element={<Upload />} />
                
                <Route path="/Reports" element={<Reports />} />
                
                <Route path="/Templates" element={<Templates />} />
                
                <Route path="/ScoreReference" element={<ScoreReference />} />
                
                <Route path="/TemplateEditor" element={<TemplateEditor />} />
                
                <Route path="/MyDescriptors" element={<MyDescriptors />} />
                
                <Route path="/GenerateReport" element={<GenerateReport />} />
                
                <Route path="/ViewReport" element={<ViewReport />} />
                
                <Route path="/ManualEntry" element={<ManualEntry />} />
                
                <Route path="/TestBank" element={<TestBank />} />
                
                <Route path="/BulkUpdateTestBank" element={<BulkUpdateTestBank />} />
                
                <Route path="/ManageTestBankVisibility" element={<ManageTestBankVisibility />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}