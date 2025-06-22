import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Filter, 
  Image as ImageIcon,
  Calendar,
  User,
  Camera,
  Eye,
  Download,
  Upload,
  Tag,
  Grid,
  List,
  Star,
  Share2,
  Edit,
  Trash2
} from 'lucide-react';
import { ImageResult } from '../../types';
import { useAuth } from '../../contexts/AuthContext';

const CaseImagesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<'all' | 'before' | 'after' | 'during' | 'xray' | 'clinical'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const { user } = useAuth();

  // Mock case images data
  const mockCaseImages: ImageResult[] = [
    {
      id: '1',
      patient: {
        id: '1',
        firstname: 'Amina',
        lastname: 'Benali',
        phone: '0661234567',
        email: 'amina.benali@email.com',
        gender: 'female',
        city: 'Alger',
        province: 'Alger',
        patientType: 'OLD_PATIENT',
        dateOfBirth: new Date('1985-03-15'),
        appointments: [],
        medicalFiles: [],
        factures: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        historique: [],
        allergies: ['Pénicilline'],
        chronicConditions: ['Hypertension'],
        totalVisits: 12,
        totalSpent: 45000
      },
      medicalFile: {
        id: '1',
        patient: {} as any,
        doctor: {} as any,
        date: new Date(),
        description: 'Traitement orthodontique',
        diagnostics: ['Malocclusion'],
        treatments: [],
        prescriptions: [],
        labResults: [],
        radiologyResults: [],
        photos: [],
        referrals: [],
        updatedBy: user!,
        medicalConditions: [],
        notes: [],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      imageUrl: 'https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg',
      thumbnailUrl: 'https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?w=300',
      caption: 'Vue frontale avant traitement orthodontique',
      category: 'before',
      tags: ['orthodontie', 'malocclusion', 'avant-traitement', 'vue-frontale'],
      uploadedBy: user!,
      createdAt: new Date('2024-01-15')
    },
    {
      id: '2',
      patient: {
        id: '1',
        firstname: 'Amina',
        lastname: 'Benali',
        phone: '0661234567',
        email: 'amina.benali@email.com',
        gender: 'female',
        city: 'Alger',
        province: 'Alger',
        patientType: 'OLD_PATIENT',
        dateOfBirth: new Date('1985-03-15'),
        appointments: [],
        medicalFiles: [],
        factures: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        historique: [],
        allergies: ['Pénicilline'],
        chronicConditions: ['Hypertension'],
        totalVisits: 12,
        totalSpent: 45000
      },
      medicalFile: {
        id: '1',
        patient: {} as any,
        doctor: {} as any,
        date: new Date(),
        description: 'Traitement orthodontique - Suivi',
        diagnostics: ['Évolution favorable'],
        treatments: [],
        prescriptions: [],
        labResults: [],
        radiologyResults: [],
        photos: [],
        referrals: [],
        updatedBy: user!,
        medicalConditions: [],
        notes: [],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      imageUrl: 'https://images.pexels.com/photos/6812542/pexels-photo-6812542.jpeg',
      thumbnailUrl: 'https://images.pexels.com/photos/6812542/pexels-photo-6812542.jpeg?w=300',
      caption: 'Vue frontale après 6 mois de traitement',
      category: 'during',
      tags: ['orthodontie', 'suivi', 'évolution', 'vue-frontale'],
      uploadedBy: user!,
      createdAt: new Date('2024-01-20')
    },
    {
      id: '3',
      patient: {
        id: '2',
        firstname: 'Mohamed',
        lastname: 'Alami',
        phone: '0662345678',
        email: 'mohamed.alami@email.com',
        gender: 'male',
        city: 'Oran',
        province: 'Oran',
        patientType: 'NEW_PATIENT',
        dateOfBirth: new Date('1990-07-22'),
        appointments: [],
        medicalFiles: [],
        factures: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        historique: [],
        allergies: [],
        chronicConditions: [],
        totalVisits: 3,
        totalSpent: 12000
      },
      medicalFile: {
        id: '2',
        patient: {} as any,
        doctor: {} as any,
        date: new Date(),
        description: 'Blanchiment dentaire',
        diagnostics: ['Dyschromie dentaire'],
        treatments: [],
        prescriptions: [],
        labResults: [],
        radiologyResults: [],
        photos: [],
        referrals: [],
        updatedBy: user!,
        medicalConditions: [],
        notes: [],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      imageUrl: 'https://images.pexels.com/photos/6812544/pexels-photo-6812544.jpeg',
      thumbnailUrl: 'https://images.pexels.com/photos/6812544/pexels-photo-6812544.jpeg?w=300',
      caption: 'Résultat après blanchiment dentaire',
      category: 'after',
      tags: ['blanchiment', 'esthétique', 'après-traitement', 'sourire'],
      uploadedBy: user!,
      createdAt: new Date('2024-01-18')
    },
    {
      id: '4',
      patient: {
        id: '3',
        firstname: 'Fatima',
        lastname: 'Zahra',
        phone: '0663456789',
        email: 'fatima.zahra@email.com',
        gender: 'female',
        city: 'Marrakech',
        province: 'Marrakech-Safi',
        patientType: 'URGENCE_PATIENT',
        dateOfBirth: new Date('1978-11-08'),
        appointments: [],
        medicalFiles: [],
        factures: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        historique: [],
        allergies: [],
        chronicConditions: [],
        totalVisits: 1,
        totalSpent: 5000
      },
      medicalFile: {
        id: '3',
        patient: {} as any,
        doctor: {} as any,
        date: new Date(),
        description: 'Examen clinique d\'urgence',
        diagnostics: ['Fracture dentaire'],
        treatments: [],
        prescriptions: [],
        labResults: [],
        radiologyResults: [],
        photos: [],
        referrals: [],
        updatedBy: user!,
        medicalConditions: [],
        notes: [],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      imageUrl: 'https://images.pexels.com/photos/6812546/pexels-photo-6812546.jpeg',
      thumbnailUrl: 'https://images.pexels.com/photos/6812546/pexels-photo-6812546.jpeg?w=300',
      caption: 'Fracture de la dent 11 - Vue clinique',
      category: 'clinical',
      tags: ['urgence', 'fracture', 'traumatisme', 'incisive'],
      uploadedBy: user!,
      createdAt: new Date('2024-01-19')
    }
  ];

  // Get all unique tags
  const allTags = Array.from(new Set(mockCaseImages.flatMap(image => image.tags)));

  const filteredImages = mockCaseImages.filter(image => {
    const matchesSearch = 
      image.patient.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.patient.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.caption.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = filterCategory === 'all' || image.category === filterCategory;
    const matchesTag = selectedTag === 'all' || image.tags.includes(selectedTag);

    return matchesSearch && matchesCategory && matchesTag;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'before': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'after': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'during': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'xray': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      case 'clinical': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getCategoryText = (category: string) => {
    switch (category) {
      case 'before': return 'Avant';
      case 'after': return 'Après';
      case 'during': return 'Pendant';
      case 'xray': return 'Radiographie';
      case 'clinical': return 'Clinique';
      default: return category;
    }
  };

  // Statistics
  const totalImages = filteredImages.length;
  const beforeImages = filteredImages.filter(img => img.category === 'before').length;
  const afterImages = filteredImages.filter(img => img.category === 'after').length;
  const clinicalImages = filteredImages.filter(img => img.category === 'clinical').length;

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Images de Cas</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Galerie d'images cliniques et documentation des cas
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
            <Upload className="w-5 h-5" />
            <span>Télécharger Images</span>
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Nouveau Cas</span>
          </button>
        </div>
      </motion.div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Total Images</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{totalImages}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <ImageIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Images Avant</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{beforeImages}</p>
            </div>
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center">
              <Camera className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Images Après</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{afterImages}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Images Cliniques</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{clinicalImages}</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
              <Eye className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher par patient, description ou tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value as any)}
              className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              <option value="all">Toutes catégories</option>
              <option value="before">Avant traitement</option>
              <option value="during">Pendant traitement</option>
              <option value="after">Après traitement</option>
              <option value="clinical">Images cliniques</option>
              <option value="xray">Radiographies</option>
            </select>

            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              <option value="all">Tous les tags</option>
              {allTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>

            <div className="flex items-center space-x-2 border border-gray-300 dark:border-gray-600 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Exporter</span>
            </button>
          </div>
        </div>

        {/* Images Display */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative">
                  <img 
                    src={image.thumbnailUrl || image.imageUrl} 
                    alt={image.caption}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity flex space-x-2">
                      <button className="p-2 bg-white rounded-full text-gray-800 hover:bg-gray-100">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-white rounded-full text-gray-800 hover:bg-gray-100">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-white rounded-full text-gray-800 hover:bg-gray-100">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <span className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(image.category)}`}>
                    {getCategoryText(image.category)}
                  </span>
                </div>
                
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">
                    {image.caption}
                  </h3>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <User className="w-4 h-4" />
                    <span>{image.patient.firstname} {image.patient.lastname}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{image.createdAt.toLocaleDateString('fr-FR')}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {image.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                    {image.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-400 rounded-full text-xs">
                        +{image.tags.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-500">
                      Par {image.uploadedBy.firstname}
                    </span>
                    <div className="flex space-x-1">
                      <button className="p-1 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded">
                        <Edit className="w-3 h-3" />
                      </button>
                      <button className="p-1 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/20 rounded">
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <img 
                    src={image.thumbnailUrl || image.imageUrl} 
                    alt={image.caption}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-1">
                          {image.caption}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                          <span>{image.patient.firstname} {image.patient.lastname}</span>
                          <span>{image.createdAt.toLocaleDateString('fr-FR')}</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(image.category)}`}>
                            {getCategoryText(image.category)}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-green-600 hover:bg-green-100 dark:hover:bg-green-900/20 rounded-lg transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-purple-600 hover:bg-purple-100 dark:hover:bg-purple-900/20 rounded-lg transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-orange-600 hover:bg-orange-100 dark:hover:bg-orange-900/20 rounded-lg transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-2">
                      {image.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="text-xs text-gray-500 dark:text-gray-500">
                      Téléchargé par {image.uploadedBy.firstname} {image.uploadedBy.lastname}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Aucune image trouvée</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Téléchargez des images de cas ou modifiez vos critères de recherche.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default CaseImagesPage;