import React from 'react';
import { AlertTriangle } from 'lucide-react';

/* eslint-disable react/prop-types */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(_error) {
    return { hasError: true };
  }

  componentDidCatch(_error, errorInfo) {
    console.error('Error Boundary caught an error:', _error, errorInfo);
    this.setState({
      error: _error,
      errorInfo,
    });
  }

  resetError = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 p-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 text-center">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h1>
            <p className="text-gray-600 mb-6">
              We encountered an unexpected error. Please try refreshing the page or contact support
              if the problem persists.
            </p>
            {import.meta.env.MODE === 'development' && this.state.error && (
              <details className="text-left mb-6 p-4 bg-gray-50 rounded text-sm text-gray-700 overflow-auto max-h-40">
                <summary className="font-semibold cursor-pointer mb-2">Error Details</summary>
                <pre className="whitespace-pre-wrap break-words">{this.state.error.toString()}</pre>
              </details>
            )}
            <div className="space-y-3">
              <button onClick={this.resetError} className="w-full btn-primary">
                Try Again
              </button>
              <a href="/" className="block btn-outline">
                Back to Home
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
/* eslint-enable react/prop-types */

export default ErrorBoundary;
