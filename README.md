# MovieFlix - Movie Discovery App

A modern, dark-themed mobile application built with React Native and Expo for discovering and exploring movies. The app features a sleek interface with an intuitive search functionality and comprehensive movie browsing experience.

## 📱 Screenshot

![MovieFlix App Screenshot](screen_shot_01.png)

## ✨ Features

- **Dark Theme UI**: Modern, eye-friendly dark interface
- **Movie Search**: Powerful search functionality to find movies
- **Movie Discovery**: Browse latest movies with beautiful card layouts
- **Responsive Design**: Optimized for mobile devices
- **Navigation**: Tab-based navigation with Home, Search, Saved, and Profile sections
- **Modern Logo**: Geometric, colorful app logo with purple, yellow, and red elements

## 🛠️ Tech Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router with tab navigation
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **Language**: TypeScript
- **State Management**: Custom hooks with React hooks
- **API Integration**: Custom API service layer

## 📦 Dependencies

### Core Dependencies
- `expo` (~53.0.22) - Expo SDK
- `react` (19.0.0) - React library
- `react-native` (0.79.6) - React Native framework
- `expo-router` (~5.1.5) - File-based routing
- `nativewind` (^4.1.23) - Tailwind CSS for React Native

### UI & Navigation
- `@react-navigation/bottom-tabs` (^7.3.10) - Bottom tab navigation
- `@react-navigation/native` (^7.1.6) - Navigation library
- `expo-vector-icons` (^14.1.0) - Icon library

### Additional Features
- `expo-image` (~2.4.0) - Optimized image component
- `expo-haptics` (~14.1.4) - Haptic feedback
- `react-native-reanimated` (~3.17.4) - Animations
- `react-native-gesture-handler` (~2.24.0) - Gesture handling

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development) or Android Studio (for Android development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ismailcankaratas/movie_app.git
   cd movie_app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Run on device/simulator**
   ```bash
   # iOS
   npm run ios
   
   # Android
   npm run android
   
   # Web
   npm run web
   ```

## 📁 Project Structure

```
movie_app/
├── app/                    # App routes and screens
│   ├── (tabs)/            # Tab navigation screens
│   │   ├── index.tsx      # Home screen
│   │   ├── search.tsx     # Search screen
│   │   ├── saved.tsx      # Saved movies
│   │   └── profile.tsx    # User profile
│   ├── movies/            # Movie detail screens
│   └── onboarding.tsx     # Onboarding flow
├── components/            # Reusable components
│   ├── MovieCard.tsx      # Movie card component
│   └── SearchBar.tsx      # Search bar component
├── services/              # API and data services
│   ├── api.ts            # API configuration
│   └── useFetch.ts       # Custom fetch hook
├── constants/             # App constants
│   ├── icons.ts          # Icon definitions
│   └── images.ts         # Image assets
├── interfaces/            # TypeScript interfaces
└── assets/               # Static assets
    ├── images/           # Image files
    └── icons/            # Icon files
```

## 🎨 UI Components

### Home Screen
- **Logo Display**: Centered geometric logo with purple, yellow, and red elements
- **Search Bar**: Prominent search input with magnifying glass icon
- **Movie Grid**: 3-column layout displaying latest movies
- **Loading States**: Activity indicators for better UX

### Navigation
- **Bottom Tabs**: Home, Search, Saved, and Profile sections
- **Active State**: Purple highlight for current tab
- **Icons**: Intuitive icons for each navigation item

## 🔧 Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS simulator
- `npm run web` - Run in web browser
- `npm run lint` - Run ESLint

## 📱 App Configuration

The app is configured with:
- **Bundle ID**: `com.anonymous.movie-app`
- **App Name**: MovieFlix
- **Version**: 1.0.0
- **Orientation**: Portrait
- **New Architecture**: Enabled for better performance

## 🎯 Key Features Implementation

### Search Functionality
- Dedicated search screen with advanced filtering
- Real-time search suggestions
- Search history management

### Movie Cards
- Responsive grid layout
- Movie poster display
- Rating and metadata
- Tap to view details

### State Management
- Custom `useFetch` hook for API calls
- Loading and error states
- Optimized re-rendering

## 🚀 Deployment

### iOS
```bash
expo build:ios
```

### Android
```bash
expo build:android
```

### Web
```bash
expo build:web
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email ismailcankaratasss@gmail.com or create an issue in the repository.

---

**MovieFlix** - Discover your next favorite movie! 🎬✨
