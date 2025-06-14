export default function BlogPost() {
    return (
      <main className="flex flex-col items-center min-h-[calc(100vh-200px)] py-12">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-medium mb-8">The Art of Linear Regression</h1>
          <div className="prose prose-invert">
            <p className="text-gray-200 font-sans">
              Welcome to my first blog post! This topic came up during a casual conversation with a co-worker about the history of deep learning. At one point, they asked me a simple yet thought-provoking question: 
              <strong>“What is linear regression from a geometric perspective?”</strong>
            </p>
  
            <p className="text-gray-200 font-sans">
              Now, you might laugh — linear regression is about as basic as it gets in data science. And sure, I *thought* I understood it. I could recite the definition, describe its use cases, and even derive the math. But when it came to explaining the geometry of it — truly visualizing what’s happening — I realized I didn’t have a satisfying answer.
            </p>
  
            <p className="text-gray-200 font-sans">
              That’s what inspired this post... Stay with me, I will finish this post by the end of the week.
            </p>
          </div>
        </div>
      </main>
    );
  }
  