import { useState } from 'react';

interface SEOData {
  title: string;
  description: string;
  ogImage: string;
  keywords: string;
  canonical: string;
}

interface SEOEditorProps {
  initialData: SEOData;
  pageSlug: string;
  onSave: (data: SEOData) => Promise<void>;
}

const SEOEditor = ({ initialData, pageSlug, onSave }: SEOEditorProps) => {
  const [seoData, setSeoData] = useState<SEOData>(initialData);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSeoData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveMessage('');
    
    try {
      await onSave(seoData);
      setSaveMessage('SEO data saved successfully!');
      setTimeout(() => setSaveMessage(''), 3000);
    } catch (error) {
      console.error('Error saving SEO data:', error);
      setSaveMessage('Error saving SEO data. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">SEO Settings for /{pageSlug}</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Page Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={seoData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            maxLength={60}
          />
          <p className="text-xs text-gray-500 mt-1">
            {seoData.title.length}/60 characters (recommended: 50-60)
          </p>
        </div>
        
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Meta Description
          </label>
          <textarea
            id="description"
            name="description"
            value={seoData.description}
            onChange={handleChange}
            rows={3}
            className="w-full p-2 border border-gray-300 rounded"
            maxLength={160}
          />
          <p className="text-xs text-gray-500 mt-1">
            {seoData.description.length}/160 characters (recommended: 120-160)
          </p>
        </div>
        
        <div>
          <label htmlFor="keywords" className="block text-sm font-medium text-gray-700 mb-1">
            Keywords (comma separated)
          </label>
          <input
            id="keywords"
            name="keywords"
            type="text"
            value={seoData.keywords}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        
        <div>
          <label htmlFor="ogImage" className="block text-sm font-medium text-gray-700 mb-1">
            OG Image URL
          </label>
          <input
            id="ogImage"
            name="ogImage"
            type="text"
            value={seoData.ogImage}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        
        <div>
          <label htmlFor="canonical" className="block text-sm font-medium text-gray-700 mb-1">
            Canonical URL
          </label>
          <input
            id="canonical"
            name="canonical"
            type="text"
            value={seoData.canonical}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        
        <div className="pt-4">
          {saveMessage && (
            <p className={`text-sm mb-2 ${saveMessage.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
              {saveMessage}
            </p>
          )}
          <button
            type="submit"
            disabled={isSaving}
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 disabled:opacity-50"
          >
            {isSaving ? 'Saving...' : 'Save SEO Settings'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SEOEditor;
