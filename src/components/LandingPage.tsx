import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import heroImage from '@/assets/hero-image.png';
import drillbitsImage from '@/assets/drillbits.png';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface to-surface-variant">
      {/* Navigation */}
      <div className="absolute top-4 left-4 z-20">
        <Button 
          variant="secondary" 
          size="sm"
          onClick={() => window.history.back()}
          className="bg-surface/80 hover:bg-surface border border-outline backdrop-blur-sm"
        >
          ← Back to Scanner
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Hero Content */}
            <div className="space-y-6 lg:pr-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-black text-foreground leading-tight">
                  Professional
                  <span className="block text-primary">Tools</span>
                  <span className="block">& Equipment</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Precision-engineered tools designed for industrial applications. 
                  Built to withstand the toughest conditions while delivering 
                  exceptional performance and reliability.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 font-semibold px-8">
                  Explore Products
                </Button>
                <Button variant="outline" size="lg" className="font-semibold px-8">
                  Learn More
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Products</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Professional industrial tools and equipment control panel"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  style={{ filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.3))' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
              </div>
              
              {/* Floating accent */}
              <div 
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"
                style={{ boxShadow: 'var(--glow-primary)' }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Precision Engineering
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our drill bits and cutting tools are manufactured to the highest standards, 
              ensuring optimal performance in demanding industrial applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <Card className="p-6 bg-surface border-outline hover:bg-surface-variant transition-colors group">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <div className="w-6 h-6 bg-primary rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Durability</h3>
                <p className="text-muted-foreground">
                  Built with premium materials to withstand extreme conditions and extended use.
                </p>
              </div>
            </Card>

            {/* Feature Card 2 */}
            <Card className="p-6 bg-surface border-outline hover:bg-surface-variant transition-colors group">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <div className="w-6 h-6 bg-primary rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Precision</h3>
                <p className="text-muted-foreground">
                  Engineered with tight tolerances for accurate and consistent performance.
                </p>
              </div>
            </Card>

            {/* Feature Card 3 */}
            <Card className="p-6 bg-surface border-outline hover:bg-surface-variant transition-colors group md:col-span-2 lg:col-span-1">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <div className="w-6 h-6 bg-primary rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Reliability</h3>
                <p className="text-muted-foreground">
                  Trusted by professionals worldwide for critical applications.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Product Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img 
                  src={drillbitsImage} 
                  alt="High-quality industrial drill bits with precision cutting edges"
                  className="w-full h-auto rounded-2xl shadow-xl bg-white p-8"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Product Content */}
            <div className="space-y-6 order-1 lg:order-2 lg:pl-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                  Step Drill Bits
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our step drill bits feature progressive sizing for clean, precise holes 
                  in sheet metal and thin materials. Each bit is crafted from high-speed 
                  steel with a titanium nitride coating for extended tool life.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Multiple hole sizes in one tool</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Clean, burr-free cutting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Self-centering 135° split point</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-primary hover:bg-primary/90 font-semibold px-6">
                  View Specifications
                </Button>
                <Button variant="outline" className="font-semibold px-6">
                  Request Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground">
              Contact our team to discuss your specific requirements and find the perfect tools for your application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 font-semibold px-8">
                Contact Sales
              </Button>
              <Button variant="outline" size="lg" className="font-semibold px-8">
                Download Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};