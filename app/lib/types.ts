import { User as FirebaseUser } from "firebase/auth";
import { Timestamp, DocumentData } from "firebase/firestore";

// Extended User interface combining Firebase User with our custom fields
export interface User extends FirebaseUser {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  uid: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: {
    creationTime?: string;
    lastSignInTime?: string;
  };
  providerData: any[];
  refreshToken: string;
  tenantId: string | null;
  delete: () => Promise<void>;
  getIdToken: (forceRefresh?: boolean) => Promise<string>;
  getIdTokenResult: (forceRefresh?: boolean) => Promise<any>;
  reload: () => Promise<void>;
  toJSON: () => object;
}

// Programming Problem interface
export interface Problem {
  id: string;
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  language: string;
  starterCode: string;
  testCases: TestCase[];
  points: number;
  tags: string[];
  createdAt: Timestamp;
  updatedAt: Timestamp;
  createdBy: string;
  isActive: boolean;
}

// Test case for problems
export interface TestCase {
  id: string;
  input: string;
  expectedOutput: string;
  isHidden: boolean;
  explanation?: string;
}

// User submission for a problem
export interface Submission {
  id: string;
  userId: string;
  problemId: string;
  code: string;
  language: string;
  status: "pending" | "running" | "passed" | "failed";
  testResults: TestResult[];
  submittedAt: Timestamp;
  executionTime?: number;
  memoryUsed?: number;
}

// Test result for individual test cases
export interface TestResult {
  testCaseId: string;
  passed: boolean;
  actualOutput?: string;
  executionTime?: number;
  memoryUsed?: number;
  error?: string;
}

// User progress and statistics
export interface UserProgress {
  userId: string;
  totalPoints: number;
  problemsSolved: number;
  currentStreak: number;
  longestStreak: number;
  languageStats: Record<string, LanguageStats>;
  difficultyStats: Record<string, number>;
  lastActive: Timestamp;
  joinedAt: Timestamp;
  achievements: string[];
}

// Statistics for each programming language
export interface LanguageStats {
  problemsSolved: number;
  totalSubmissions: number;
  successRate: number;
}

// Game session for tracking learning sessions
export interface GameSession {
  id: string;
  userId: string;
  startTime: Timestamp;
  endTime?: Timestamp;
  problemsAttempted: string[];
  problemsSolved: string[];
  totalPoints: number;
  duration?: number; // in minutes
  isActive: boolean;
}

// Achievement/Badge system
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  condition: {
    type: "problems_solved" | "points_earned" | "streak" | "language_mastery";
    value: number;
    language?: string;
  };
  rarity: "common" | "rare" | "epic" | "legendary";
  points: number;
}

// Leaderboard entry
export interface LeaderboardEntry {
  userId: string;
  displayName: string;
  photoURL?: string;
  totalPoints: number;
  problemsSolved: number;
  currentStreak: number;
  rank: number;
  lastActive: Timestamp;
}

// Generic API response wrapper
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Form validation types
export interface FormErrors {
  [key: string]: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: FormErrors;
}

// Theme and UI preferences
export interface UserPreferences {
  theme: "light" | "dark" | "system";
  language: string;
  notifications: {
    email: boolean;
    push: boolean;
    achievements: boolean;
    reminders: boolean;
  };
  editorSettings: {
    fontSize: number;
    tabSize: number;
    autoSave: boolean;
    theme: string;
  };
}

// Chat/Forum related types
export interface Discussion {
  id: string;
  title: string;
  content: string;
  authorId: string;
  problemId?: string;
  tags: string[];
  createdAt: Timestamp;
  updatedAt: Timestamp;
  likes: number;
  replies: Reply[];
  isPinned: boolean;
  isLocked: boolean;
}

export interface Reply {
  id: string;
  content: string;
  authorId: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  likes: number;
  parentId?: string; // for nested replies
}

// Notification system
export interface Notification {
  id: string;
  userId: string;
  type: "achievement" | "submission" | "reply" | "system";
  title: string;
  message: string;
  data?: Record<string, any>;
  isRead: boolean;
  createdAt: Timestamp;
}

// Analytics and metrics
export interface AnalyticsData {
  userId: string;
  date: string;
  problemsAttempted: number;
  problemsSolved: number;
  timeSpent: number; // in minutes
  languagesUsed: string[];
  difficultyBreakdown: Record<string, number>;
}

// Export commonly used Firebase types
export type FirestoreTimestamp = Timestamp;
export type FirestoreDocumentData = DocumentData;
