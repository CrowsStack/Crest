import Image from 'next/image';
import Link from 'next/link';

export function AppDownload() {
  return (
    <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Our Mobile App
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Access instant loans, track repayments, and manage your account on the go. 
              Download our app for a seamless mobile experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* Play Store Button */}
              <Link 
                href="https://play.google.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform hover:scale-105"
              >
                <Image
                  src="/images/app/google-play-badge.svg"
                  alt="Get it on Google Play"
                  width={200}
                  height={60}
                  className="h-[60px] w-auto"
                />
              </Link>
              {/* App Store Button */}
              <Link 
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform hover:scale-105"
              >
                <Image
                  src="/images/app/app-store-badge.svg"
                  alt="Download on the App Store"
                  width={200}
                  height={60}
                  className="h-[60px] w-auto"
                />
              </Link>
            </div>
          </div>
          
          {/* Phone Mockup */}
          <div className="relative h-[500px] flex justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-3xl"></div>
            <Image
              src="/images/app/phone-mockup.png"
              alt="CrestBeam Mobile App"
              width={300}
              height={600}
              className="relative z-10 object-contain max-h-[90%] w-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
