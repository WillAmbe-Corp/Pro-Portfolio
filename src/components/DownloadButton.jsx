import Button from './Button';

export default function DownloadButton({ fileName, filePath, buttonText }) {
    const handleDownload = async () => {
        try {
            // Fetch the file
            const response = await fetch(filePath);
            const blob = await response.blob();
            
            // Create a URL for the blob
            const url = window.URL.createObjectURL(blob);
            
            // Create a temporary link element
            const link = document.createElement('a');
            link.href = url;
            link.download = fileName;
            
            // Append to body, click, and remove
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Clean up the URL
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading file:', error);
        }
    };

    return (
        <Button
            buttons={buttonText || 'Download'}
            onClick={handleDownload}
        />
    );
} 