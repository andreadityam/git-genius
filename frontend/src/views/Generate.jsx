import { useState } from 'react'
import { Button } from "@/components/ui/button"
import Header from '../components/Header'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function Generate() {
    const [diffContent, setDiffContent] = useState('');
    const [result, setResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Mencegah halaman refresh saat submit
        setIsLoading(true);
        setError('');
        setResult('');

        try {
            const response = await axios.post(`${API_URL}/api/commits/generate`, {
                diffContent: diffContent
            });

            setResult(response.data.message);

        } catch (err) {
            setError('Failed to generate message. Check the console for details.');
            console.error("Error when contacting the backend:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='bg-black/95 min-h-screen'>
            <Header />
            <div className='flex justify-center text-white flex-col items-center'>
                <p className='font-medium text-2xl pt-10 pb-2'>Commit Message Generator</p>
                <p className='text-white/60 text-sm md:px-2 px-8'>Paste your git diff below to automatically generate a commit message.</p>
                <div className='text-white/60 flex flex-col mt-5'>
                    <p className='mb-2'>Git Diff</p>
                    <form onSubmit={handleSubmit}>
                        <textarea value={diffContent} onChange={(e) => setDiffContent(e.target.value)} className='md:h-50 h-30 py-2 px-3 w-90 md:w-180 border-1 border-white/20 rounded-md' placeholder={
                            "diff --git a/src/App.js b/src/App.js\nindex 97ca3..b20ff 100644\n--- a/src/App.js\n+++ b/src/App.js\n@@ -1,4 +1,4 @@"
                        }></textarea>
                        <div className='flex justify-end my-5'>
                            <Button type='submit' disabled={isLoading} className='bg-blue-500 md:w-60 w-25 text-white cursor-pointer hover:bg-blue-600'>{isLoading ? 'Processing...' : 'Generate'}</Button>
                        </div>
                    </form>
                    {error && (
                        <div className="mt-6 mb-5 p-4 md:w-180 w-90 bg-red-900/50 border border-red-500 text-red-300 rounded-md">
                            {error}
                        </div>
                    )}
                    {!result && !error && (
                        <div className='bg-white/10 p-5 rounded-lg'>
                            <p>The results will appear here...</p>
                        </div>
                    )}
                    {result && (
                        <div className='bg-white/10 md:p-5 p-2 rounded-lg md:w-180 w-90 mb-15'>
                            <p>{result}</p>
                        </div>
                    )}
                </div>
            </div>
            <div id="how" className='flex justify-center text-white flex-col items-center mt-20 mx-10'>
                <h2 className='font-medium text-2xl mb-4'>How to Use</h2>
                <div className='text-white/60 max-w-2xl'>
                    <h3 className='font-semibold text-xl mb-2'>What is Git Diff?</h3>
                    <p className='mt-2 mb-4 text-justify'>
                        Git diff is a command in Git that shows the differences between commits, branches, or files. It allows you to see the changes made to your codebase, including additions, deletions, and modifications. The output of git diff is a formatted representation of the changes, making it easier to review and understand the modifications made to your code.
                    </p>
                    <h3 className='font-semibold text-xl mb-2'>What Can This Website Do?</h3>
                    <p className='mt-2 mb-4 text-justify'>
                        This website provides a convenient way to generate commit messages based on your git diff. Instead of manually writing commit messages, you can simply paste your git diff into the provided text area, and the website will automatically generate a meaningful commit message for you. This saves time and ensures that your commit messages accurately describe the changes you've made.
                    </p>
                    <p className='mt-2 mb-4 text-justify'>
                        Here's how to use this website:
                    </p>
                    <ol className='mt-2 mb-6 text-justify'>
                        <li>
                            <p className='font-medium mb-1'>Paste Your Git Diff:</p>
                            <p className='mb-4'>
                                Copy the output of your git diff command and paste it into the text area labeled "Git Diff". The diff should include the changes you've made to your code, such as file additions, deletions, and modifications. Make sure to include the complete diff output for accurate message generation.
                            </p>
                        </li>
                        <li>
                            <p className='font-medium mb-1'>Generate Commit Message:</p>
                            <p className='mb-4 text-justify'>
                                After pasting your git diff, click the "Generate" button. The website will process the diff and generate a commit message based on the changes detected. The generated message will summarize the key modifications made in your code.
                            </p>
                        </li>
                        <li>
                            <p className='font-medium mb-1'>View the Generated Message:</p>
                            <p className='mb-4 text-justify'>
                                Once the commit message is generated, it will appear below the "Generate" button. The message will be displayed in a visually distinct section, making it easy to read and copy. You can then use this message when committing your changes using Git.
                            </p>
                        </li>
                        <li>
                            <p className='font-medium mb-1'>Handle Errors:</p>
                            <p className='mb-4 text-justify'>
                                If there are any issues with generating the commit message, an error message will be displayed below the text area. The error message will provide information about what went wrong, allowing you to troubleshoot and resolve the issue. Common errors may include invalid diff format or connectivity problems with the backend service.
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
        </div >

    )
}