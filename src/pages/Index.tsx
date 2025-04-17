import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ArrowRight, ShieldAlert, BarChart, Terminal, AlertCircle, Server, Zap } from 'lucide-react';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="w-full max-w-[1400px] mx-auto px-4 py-12">
        <header className="w-full py-8 mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">SHIELD</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Synthetic Hacking Intelligence for Enhanced Liability Defense
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
              <Link to="/dashboard">
                Launch Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 bg-zinc-800 hover:bg-zinc-700">
              View Documentation
            </Button>
          </div>
        </header>

        <Alert className="w-full mb-8 bg-yellow-900/30 border border-yellow-800 text-yellow-300">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Hackathon Project</AlertTitle>
          <AlertDescription>
            This is a 24-hour hackathon project demonstrating an AI-enhanced cybersecurity platform concept.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 w-full">
          <Card className="w-full bg-gray-800 border-gray-700">
            <CardHeader>
              <ShieldAlert className="h-8 w-8 text-blue-400 mb-2" />
              <CardTitle>Threat Intelligence</CardTitle>
              <CardDescription className="text-gray-400">Real-time monitoring of cyber threats</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Automatically analyze and prioritize cyber threats relevant to your organization using advanced AI models.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" asChild className="text-blue-400 hover:text-blue-300 p-0">
                <Link to="/threat-intelligence">
                  Explore Threat Intelligence
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="w-full bg-gray-800 border-gray-700">
            <CardHeader>
              <Terminal className="h-8 w-8 text-cyan-400 mb-2" />
              <CardTitle>Vulnerability Management</CardTitle>
              <CardDescription className="text-gray-400">Comprehensive vulnerability scanning</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Identify and prioritize vulnerabilities in your systems with intelligent assessment and risk scoring.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" asChild className="text-cyan-400 hover:text-cyan-300 p-0">
                <Link to="/vulnerability-management">
                  Manage Vulnerabilities
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="w-full bg-gray-800 border-gray-700">
            <CardHeader>
              <BarChart className="h-8 w-8 text-green-400 mb-2" />
              <CardTitle>Remediation Planning</CardTitle>
              <CardDescription className="text-gray-400">AI-powered security recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Get actionable remediation plans tailored to your specific infrastructure and security challenges.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" asChild className="text-green-400 hover:text-green-300 p-0">
                <Link to="/remediation-planning">
                  View Remediation Plans
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="w-full bg-gray-800 border-gray-700">
            <CardHeader>
              <Zap className="h-8 w-8 text-purple-400 mb-2" />
              <CardTitle>Security Scanning</CardTitle>
              <CardDescription className="text-gray-400">Automated security assessments</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Run comprehensive security scans against your infrastructure to identify weaknesses before attackers do.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" asChild className="text-purple-400 hover:text-purple-300 p-0">
                <Link to="/security-scanning">
                  Start Scanning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="w-full bg-gray-800 border-gray-700">
            <CardHeader>
              <Server className="h-8 w-8 text-orange-400 mb-2" />
              <CardTitle>System Configuration</CardTitle>
              <CardDescription className="text-gray-400">Secure your infrastructure</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Review and harden your system configurations against common security misconfigurations and vulnerabilities.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" asChild className="text-orange-400 hover:text-orange-300 p-0">
                <Link to="/system-configuration">
                  Configure Systems
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <footer className="w-full text-center text-gray-500 mt-20">
          <p className="text-sm">SHIELD - Developed for the Cybersecurity Innovation Hackathon 2025</p>
          <p className="text-xs mt-2">© 2025 SHIELD Team. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
