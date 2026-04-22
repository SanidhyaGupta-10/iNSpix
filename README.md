# 📸 iNSpix - Redux Toolkit Media Search App

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.11.0-764ABC?logo=redux)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.17-06B6D4?logo=tailwindcss)

A modern web application to search and collect photos, videos, and GIFs using Redux Toolkit for state management with API key authentication.

**[Live Demo](https://inspixx.vercel.app)** | **[View Project](https://inspixx.vercel.app)**

</div>

---

## 🌟 Overview

**iNSpix** is a comprehensive Redux Toolkit learning project that demonstrates professional state management patterns. It enables users to search for and collect media content from multiple sources (Unsplash, Pexels, and Tenor) while showcasing best practices in Redux Toolkit implementation.

This project is perfect for understanding:

- ✅ Redux Toolkit fundamentals and advanced patterns
- ✅ API integration with authentication tokens
- ✅ TypeScript with Redux
- ✅ Persistent state management with localStorage
- ✅ Component composition and hooks
- ✅ Modern React development practices

---

## 🎯 Features

### Core Functionality

- 🔍 **Multi-Source Search**: Search photos, videos, and GIFs from integrated APIs
- 💾 **Smart Collections**: Save favorite media items with persistence
- 🎨 **Responsive UI**: Beautiful, responsive design using Tailwind CSS
- 📱 **Mobile-Friendly**: Works seamlessly on all devices
- 🚀 **Fast Performance**: Built with Vite for instant development experience

### Redux State Management

- **Search Slice**: Manages search queries, results, loading states, and errors
- **Collection Slice**: Handles saved items with localStorage persistence
- **Custom Hooks**: Type-safe Redux hooks for optimal development experience
- **Toast Notifications**: Real-time user feedback for actions

### API Integration

- **Unsplash API**: 📸 High-quality photos
- **Pexels API**: 🎬 High-quality stock videos
- **Tenor API**: 😄 Animated GIFs

---

## 🏗️ Project Structure

```
iNSpix/
├── src/
│   ├── api/
│   │   └── mediaApi.ts           # API endpoints for all three services
│   ├── components/
│   │   ├── CollectionCard.tsx    # Display collection items
│   │   ├── Footer.tsx            # Footer component
│   │   ├── LoadingSpinner.tsx    # Loading indicator
│   │   ├── Navbar.tsx            # Navigation bar
│   │   ├── ResultCard.tsx        # Individual media card
│   │   ├── ResultGrid.tsx        # Grid layout for results
│   │   ├── SearchBar.tsx         # Search input component
│   │   └── Tabs.tsx              # Tab navigation (Photos/Videos/GIFs)
│   ├── pages/
│   │   ├── HomePage.tsx          # Main search page
│   │   └── CollectionPage.tsx    # Saved items page
│   ├── redux/
│   │   ├── store.ts              # Redux store configuration
│   │   ├── hooks.ts              # Custom typed Redux hooks
│   │   └── features/
│   │       ├── searchSlice.ts    # Search state logic
│   │       └── collectionSlice.ts # Collection state logic
│   ├── types/
│   │   └── types.ts              # TypeScript interfaces
│   ├── App.tsx                   # Main app component
│   ├── main.tsx                  # React entry point
│   └── index.css                 # Global styles
├── public/                       # Static assets
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript configuration
├── vite.config.ts                # Vite configuration
└── README.md                     # This file
```

---

## 🛠️ Technology Stack

### Core Technologies

| Technology        | Version | Purpose                 |
| ----------------- | ------- | ----------------------- |
| **React**         | 18.2.0  | UI library              |
| **Redux Toolkit** | 2.11.0  | State management        |
| **TypeScript**    | 5.9.3   | Type safety             |
| **Vite**          | 5.2.0   | Build tool & dev server |
| **Tailwind CSS**  | 4.1.17  | Styling                 |

### Key Libraries

- **React Router**: Client-side routing
- **Axios**: HTTP client for API requests
- **React Toastify**: Toast notifications
- **Framer Motion**: Animation library
- **React Redux**: React bindings for Redux

---

## 📋 Redux Toolkit Implementation

### Store Configuration

```typescript
// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchSlice";
import collectionReducer from "./features/collectionSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    collection: collectionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

### Search Slice - State Management

```typescript
// src/redux/features/searchSlice.ts
interface SearchState {
  query: string;
  activeTab: "photos" | "videos" | "gif";
  results: MediaItem[];
  loading: boolean;
  error: string | null;
}

// Actions: setQuery, setActiveTabs, setResults, setLoading, setError, clearResults
```

**Key Features:**

- Manages search query and results
- Handles loading and error states
- Tab switching for different media types

### Collection Slice - Persistence

```typescript
// src/redux/features/collectionSlice.ts
interface CollectionState {
  items: MediaItem[];
}

// Actions: addCollection, removeCollection, clearCollection, addedToast, removeToast
```

**Key Features:**

- Automatic localStorage synchronization
- Duplicate prevention
- Toast notifications
- Collection management

### Custom Typed Hooks

```typescript
// src/redux/hooks.ts
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

**Benefits:**

- Full TypeScript type inference
- No need to type Redux hooks repeatedly
- IDE autocomplete support

---

## 🔑 API Integration & Environment Variables

### Supported APIs

#### 1. **Unsplash API** (Photos)

- **Endpoint**: `https://api.unsplash.com/search/photos`
- **Authentication**: `Client-ID` header
- **Get API Key**: https://unsplash.com/api

#### 2. **Pexels API** (Videos)

- **Endpoint**: `https://api.pexels.com/videos/search`
- **Authentication**: Bearer token in header
- **Get API Key**: https://www.pexels.com/api

#### 3. **Tenor API** (GIFs)

- **Endpoint**: `https://tenor.googleapis.com/v2/search`
- **Authentication**: Query parameter `key`
- **Get API Key**: https://tenor.com/developer

### Environment Setup

Create a `.env.local` file in the project root:

```env
VITE_UNSPLASH_KEY=your_unsplash_api_key_here
VITE_PEXELS_KEY=your_pexels_api_key_here
VITE_TENOR_KEY=your_tenor_api_key_here
```

**Important Security Notes:**

- ⚠️ Never commit `.env.local` to version control
- ✅ Add `.env.local` to `.gitignore`
- 🔒 API keys are prefixed with `VITE_` to be safely exposed to client
- 📌 For production, use platform-specific environment variable settings

---

## 📦 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Step 1: Clone Repository

```bash
git clone https://github.com/SanidhyaGupta-10/iNSpix.git
cd iNSpix
```

### Step 2: Install Dependencies

```bash
npm install
# or
yarn install
```

### Step 3: Configure Environment Variables

```bash
# Create .env.local file
cp .env.example .env.local  # if available, or create manually
```

Add your API keys to `.env.local`:

```env
VITE_UNSPLASH_KEY=your_key
VITE_PEXELS_KEY=your_key
VITE_TENOR_KEY=your_key
```

### Step 4: Run Development Server

```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173`

---

## 🚀 Development Guide

### Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

### Project Workflow

#### 1. **Searching Media**

- User enters search query in SearchBar
- Tab selection determines media type (photos/videos/gifs)
- `setLoading()` action is dispatched
- API request is made via `mediaApi.ts`
- Results are stored via `setResults()`
- Components subscribe to `useAppSelector` and re-render

#### 2. **Adding to Collection**

- User clicks "Add to Collection" button
- `addCollection()` action is dispatched
- Redux automatically syncs to localStorage
- Toast notification appears
- CollectionPage reflects the change

#### 3. **Removing from Collection**

- User clicks remove button
- `removeCollection()` action is dispatched
- localStorage is updated
- Toast notification shows removal
- UI updates automatically

---

## 📡 API Usage Examples

### Fetching Photos

```typescript
import { fetchPhotos } from "@/api/mediaApi";

const photos = await fetchPhotos("sunset", (page = 1), (per_page = 20));
```

### Fetching Videos

```typescript
import { fetchVideos } from "@/api/mediaApi";

const videos = await fetchVideos("nature", (per_page = 15));
```

### Fetching GIFs

```typescript
import { fetchGIF } from "@/api/mediaApi";

const gifs = await fetchGIF("funny", (limit = 20));
```

---

## 🎨 UI Components

### Key Components

#### `SearchBar.tsx`

- Input field for search queries
- Handles query submission
- Dispatches search action to Redux

#### `Tabs.tsx`

- Tab navigation for media types
- Updates `activeTab` in Redux state
- Filters results by type

#### `ResultGrid.tsx`

- Displays search results in grid layout
- Responsive design with Tailwind CSS
- Lazy loading support

#### `ResultCard.tsx`

- Individual media preview card
- Add/Remove to collection button
- Image/video preview with hover effects

#### `CollectionCard.tsx`

- Displays saved collection items
- Delete functionality
- Local storage persistence visualization

---

## 💾 Data Persistence

### localStorage Integration

The Collection Slice automatically syncs with localStorage:

```typescript
// On app load
const initialState = {
  items: JSON.parse(localStorage.getItem("collection") || "[]"),
};

// On collection update
localStorage.setItem("collection", JSON.stringify(state.items));
```

**Benefits:**

- ✅ Persistent user data across sessions
- ✅ No backend required
- ✅ Instant data retrieval
- ✅ Offline functionality

---

## 🔍 Redux DevTools

### Enable Redux DevTools

Redux Toolkit automatically supports Redux DevTools. To use it:

1. Install [Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmjabajknhc6qfnq)
2. Open your app and DevTools
3. Go to Redux tab
4. Monitor state changes in real-time
5. Time-travel debug your application

---

## 📱 Responsive Design

The app uses **Tailwind CSS** for responsive design:

```tsx
// Example responsive layout
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  {/* Cards automatically adjust */}
</div>
```

**Breakpoints:**

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

### Environment Variables on Vercel

1. Go to Vercel Dashboard
2. Select your project
3. Settings → Environment Variables
4. Add your API keys:
   - `VITE_UNSPLASH_KEY`
   - `VITE_PEXELS_KEY`
   - `VITE_TENOR_KEY`
5. Redeploy

### Live Demo

🎉 **Project is live at**: https://inspixx.vercel.app

---

## 🎓 Learning Resources

### Redux Toolkit Concepts Covered

1. **Store Configuration**
   - `configureStore()` setup
   - Reducer combining

2. **Slices**
   - `createSlice()` for reducers and actions
   - Immer integration for immutable updates
   - Action creators

3. **Custom Hooks**
   - Type-safe `useAppDispatch`
   - Type-safe `useAppSelector`
   - Selector optimization

4. **Async Operations**
   - API calls with side effects
   - Loading and error states
   - Data normalization

5. **Persistence**
   - localStorage integration
   - State hydration

### Recommended Resources

- 📚 [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- 📚 [Redux Official Documentation](https://redux.js.org/)
- 📚 [React Documentation](https://react.dev/)
- 📚 [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- 📚 [Vite Documentation](https://vitejs.dev/)

---

## 🐛 Troubleshooting

### Common Issues

#### API Keys Not Working

- ✅ Verify keys are correctly added to `.env.local`
- ✅ Ensure `.env.local` is in project root
- ✅ Restart development server after adding keys
- ✅ Check API key quotas on respective platforms

#### Redux State Not Persisting

- ✅ Check browser localStorage is enabled
- ✅ Verify `localStorage.setItem()` is called
- ✅ Open DevTools → Application → LocalStorage

#### Search Results Not Showing

- ✅ Verify API keys have proper permissions
- ✅ Check network tab in DevTools for API errors
- ✅ Ensure loading states are properly handled

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Author

**Sanidhya Gupta**

- GitHub: [@SanidhyaGupta-10](https://github.com/SanidhyaGupta-10)
- Project: [iNSpix](https://github.com/SanidhyaGupta-10/iNSpix)

---

## 📞 Support

If you have any questions or encounter issues:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Review Redux Toolkit documentation
3. Open an issue on GitHub
4. Check existing issues for solutions

---

## 🙏 Acknowledgments

- Unsplash for providing free image API
- Pexels for video API
- Tenor for GIF API
- Redux Toolkit team for the excellent state management library
- React team for the amazing framework
- Tailwind CSS for utility-first CSS framework

---

## 📊 Project Stats

- **Total Dependencies**: 15
- **Dev Dependencies**: 8
- **Redux Store Slices**: 2
- **API Integrations**: 3
- **Pages**: 2
- **Components**: 8

---

<div align="center">

### ⭐ If you found this project helpful, please consider giving it a star!

**[View Live Project](https://inspixx.vercel.app)** | **[GitHub Repository](https://github.com/SanidhyaGupta-10/iNSpix)**

</div>
