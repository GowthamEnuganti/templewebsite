import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Landmark,
  CreditCard,
  Copy,
  Shield,
  Heart,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

const Banking = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const bankAccounts = [
    {
      id: "1",
      bankName: "State Bank of India",
      branchName: "Village Branch",
      accountNumber: "12345678901234",
      ifscCode: "SBIN0012345",
      accountHolder: "Village Temple Trust",
      accountType: "Current Account",
      purpose: "General Donations & Temple Maintenance",
      status: "Active",
    },
    {
      id: "2",
      bankName: "Union Bank of India",
      branchName: "District Branch",
      accountNumber: "98765432109876",
      ifscCode: "UBIN0567890",
      accountHolder: "Village Temple Trust - Festival Fund",
      accountType: "Savings Account",
      purpose: "Festival Celebrations & Special Events",
      status: "Active",
    },
    {
      id: "3",
      bankName: "Canara Bank",
      branchName: "Regional Branch",
      accountNumber: "56789012345678",
      ifscCode: "CNRB0001234",
      accountHolder: "Village Temple Trust - Development Fund",
      accountType: "Current Account",
      purpose: "Infrastructure Development & Renovation",
      status: "Active",
    },
  ];

  const donationStats = [
    { label: "Total Donations (2024)", value: "₹12,50,000", icon: Heart },
    { label: "Active Donors", value: "450+", icon: CheckCircle },
    { label: "Verified Accounts", value: "3", icon: Shield },
    { label: "Monthly Average", value: "₹1,05,000", icon: Landmark },
  ];

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-16 temple-hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Banking & Donations
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Support our sacred mission through secure donations. Your
              contributions help maintain temples, organize festivals, and serve
              our community
            </p>
          </div>
        </div>
      </section>

      {/* Donation Stats */}
      <section className="py-12 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {donationStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 temple-gradient rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bank Accounts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Official Bank Accounts
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All our bank accounts are officially registered and audited. We
              maintain complete transparency in our financial operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {bankAccounts.map((account) => (
              <Card key={account.id} className="temple-card-hover">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 temple-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                        <Landmark className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-foreground">
                          {account.bankName}
                        </CardTitle>
                        <p className="text-muted-foreground">
                          {account.branchName}
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800"
                    >
                      {account.status}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-3">
                      Account Purpose
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {account.purpose}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">
                          Account Number
                        </label>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="font-mono text-foreground">
                            {account.accountNumber}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              copyToClipboard(
                                account.accountNumber,
                                `account-${account.id}`,
                              )
                            }
                          >
                            {copiedField === `account-${account.id}` ? (
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </Button>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-muted-foreground">
                          IFSC Code
                        </label>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="font-mono text-foreground">
                            {account.ifscCode}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              copyToClipboard(
                                account.ifscCode,
                                `ifsc-${account.id}`,
                              )
                            }
                          >
                            {copiedField === `ifsc-${account.id}` ? (
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">
                          Account Holder
                        </label>
                        <p className="text-foreground mt-1">
                          {account.accountHolder}
                        </p>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-muted-foreground">
                          Account Type
                        </label>
                        <p className="text-foreground mt-1">
                          {account.accountType}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Guidelines */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Donation Guidelines
            </h2>
            <p className="text-lg text-muted-foreground">
              Please follow these guidelines when making donations to ensure
              proper acknowledgment and transparency
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>Security & Verification</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">
                    Always verify bank details before transferring funds
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">
                    Use official account numbers listed on this page only
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">
                    Keep transaction receipts for your records
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">
                    Report suspicious requests to our trust office immediately
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="w-5 h-5 text-primary" />
                  <span>Donation Process</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">
                    Include your full name and contact details in transaction
                    remarks
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">
                    Specify donation purpose if applicable (festival, temple
                    maintenance, etc.)
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">
                    Receipts will be provided for all donations above ₹500
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">
                    Tax exemption certificates available for eligible donations
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-accent/50">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Important Notice
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Our trust does not solicit donations door-to-door or through
                    phone calls. Please be cautious of fraudulent requests and
                    only use the official bank accounts listed above. For any
                    queries regarding donations, please contact our trust office
                    directly.
                  </p>
                  <div className="space-y-1 text-sm">
                    <p className="text-foreground">
                      <strong>Trust Office:</strong> +91 12345 67890
                    </p>
                    <p className="text-foreground">
                      <strong>Email:</strong> donations@templetrust.org
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Banking;
