import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Filter, 
  Camera,
  Calendar,
  User,
  Stethoscope,
  Clock,
  Eye,
  Download,
  Upload,
  FileText,
  Zap,
  Monitor,
  Image as ImageIcon,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';
import { RadiologyResult } from '../../types';
import { useAuth } from '../../contexts/AuthContext';

const RadiologyPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'pending' | 'completed' | 'reviewed'>('all');
  const [filterType, setFilterType] = useState<'all' | 'panoramic' | 'lateral' | '3D' | 'bitewing' | 'periapical'>('all');
  const { user } = useAuth();

  // Mock radiology results data
  const mockRadiologyResults: RadiologyResult[] = [
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
        description: 'Examen radiologique pré-implantaire',
        diagnostics: ['Évaluation osseuse'],
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
      requestedBy: {
        id: '1',
        firstname: 'Dr. Sarah',
        lastname: 'Benali',
        phone: '0661234567',
        email: 'sarah.benali@clinic.ma',
        gender: 'female',
        role: 'doctor',
        username: 'dr.benali',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        specialization: 'Orthodontie',
        cabinetNumber: 'Cabinet 1',
        cabinet: {
          id: '1',
          name: 'Cabinet 1',
          number: '1',
          type: 'consultation',
          status: 'available',
          equipment: [],
          capacity: 2,
          floor: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        agenda: [],
        patients: [],
        medicalFiles: [],
        prescriptions: [],
        usedMedicines: [],
        messages: [],
        factures: [],
        statistics: [],
        historique: [],
        doctorRole: 'employee',
        workingHours: [],
        consultationFee: 3500,
        rating: 4.8,
        totalPatients: 156,
        totalConsultations: 234,
        access: {
          viewOwnPatients: true,
          viewOwnStats: true,
          accessMedicalModules: true,
          accessFinancialOwn: true,
          globalStats: false,
          adminPrivileges: false
        }
      },
      performedBy: user!,
      imageUrl: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
      type: 'panoramic',
      findings: 'Densité osseuse satisfaisante au niveau des sites 14 et 24. Absence de pathologie apicale. Sinus maxillaires libres.',
      recommendations: 'Pose d\'implants possible. Planification chirurgicale recommandée.',
      status: 'completed',
      notes: 'Examen réalisé avec protocole standard. Qualité d\'image excellente.',
      uploadedBy: user!,
      reviewedBy: {
        id: '1',
        firstname: 'Dr. Sarah',
        lastname: 'Benali',
        phone: '0661234567',
        email: 'sarah.benali@clinic.ma',
        gender: 'female',
        role: 'doctor',
        username: 'dr.benali',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        specialization: 'Orthodontie',
        cabinetNumber: 'Cabinet 1',
        cabinet: {
          id: '1',
          name: 'Cabinet 1',
          number: '1',
          type: 'consultation',
          status: 'available',
          equipment: [],
          capacity: 2,
          floor: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        agenda: [],
        patients: [],
        medicalFiles: [],
        prescriptions: [],
        usedMedicines: [],
        messages: [],
        factures: [],
        statistics: [],
        historique: [],
        doctorRole: 'employee',
        workingHours: [],
        consultationFee: 3500,
        rating: 4.8,
        totalPatients: 156,
        totalConsultations: 234,
        access: {
          viewOwnPatients: true,
          viewOwnStats: true,
          accessMedicalModules: true,
          accessFinancialOwn: true,
          globalStats: false,
          adminPrivileges: false
        }
      },
      createdAt: new Date('2024-01-20'),
      completedAt: new Date('2024-01-20')
    },
    {
      id: '2',
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
        description: 'Contrôle orthodontique',
        diagnostics: ['Suivi traitement'],
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
      requestedBy: {
        id: '1',
        firstname: 'Dr. Sarah',
        lastname: 'Benali',
        phone: '0661234567',
        email: 'sarah.benali@clinic.ma',
        gender: 'female',
        role: 'doctor',
        username: 'dr.benali',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        specialization: 'Orthodontie',
        cabinetNumber: 'Cabinet 1',
        cabinet: {
          id: '1',
          name: 'Cabinet 1',
          number: '1',
          type: 'consultation',
          status: 'available',
          equipment: [],
          capacity: 2,
          floor: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        agenda: [],
        patients: [],
        medicalFiles: [],
        prescriptions: [],
        usedMedicines: [],
        messages: [],
        factures: [],
        statistics: [],
        historique: [],
        doctorRole: 'employee',
        workingHours: [],
        consultationFee: 3500,
        rating: 4.8,
        totalPatients: 156,
        totalConsultations: 234,
        access: {
          viewOwnPatients: true,
          viewOwnStats: true,
          accessMedicalModules: true,
          accessFinancialOwn: true,
          globalStats: false,
          adminPrivileges: false
        }
      },
      performedBy: user!,
      imageUrl: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
      type: 'lateral',
      findings: 'Évolution favorable du traitement orthodontique. Alignement dentaire en cours.',
      status: 'pending',
      notes: 'Radiographie de contrôle à 6 mois de traitement.',
      uploadedBy: user!,
      createdAt: new Date('2024-01-18')
    }
  ];

  const filteredResults = mockRadiologyResults.filter(result => {
    const matchesSearch = 
      result.patient.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.patient.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.type.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = filterStatus === 'all' || result.status === filterStatus;
    const matchesType = filterType === 'all' || result.type === filterType;

    return matchesSearch && matchesStatus && matchesType;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'completed': return 'text-green-600 bg-green-100 dark:bg-green-900/20 dark:text-green-400';
      case 'reviewed': return 'text-blue-600 bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'reviewed': return <Eye className="w-4 h-4" />;
      default: return <AlertTriangle className="w-4 h-4" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'En attente';
      case 'completed': return 'Terminé';
      case 'reviewed': return 'Validé';
      default: return status;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'panoramic': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'lateral': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case '3D': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      case 'bitewing': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      case 'periapical': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getTypeText = (type: string) => {
    switch (type) {
      case 'panoramic': return 'Panoramique';
      case 'lateral': return 'Latérale';
      case '3D': return '3D/CBCT';
      case 'bitewing': return 'Rétro-coronaire';
      case 'periapical': return 'Périapicale';
      default: return type;
    }
  };

  // Statistics
  const totalResults = filteredResults.length;
  const pendingResults = filteredResults.filter(r => r.status === 'pending').length;
  const completedResults = filteredResults.filter(r => r.status === 'completed').length;
  const reviewedResults = filteredResults.filter(r => r.status === 'reviewed').length;

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Radiologie</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Gestion des examens radiologiques et imagerie dentaire
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
            <Upload className="w-5 h-5" />
            <span>Télécharger Image</span>
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Nouvel Examen</span>
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
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Total Examens</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{totalResults}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <Camera className="w-6 h-6 text-blue-600 dark:text-blue-400" />
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
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">En Attente</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{pendingResults}</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
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
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Terminés</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{completedResults}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
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
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Validés</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{reviewedResults}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
              <Eye className="w-6 h-6 text-purple-600 dark:text-purple-400" />
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
              placeholder="Rechercher par patient ou type d'examen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as any)}
              className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              <option value="all">Tous les statuts</option>
              <option value="pending">En attente</option>
              <option value="completed">Terminés</option>
              <option value="reviewed">Validés</option>
            </select>

            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value as any)}
              className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              <option value="all">Tous les types</option>
              <option value="panoramic">Panoramique</option>
              <option value="lateral">Latérale</option>
              <option value="3D">3D/CBCT</option>
              <option value="bitewing">Rétro-coronaire</option>
              <option value="periapical">Périapicale</option>
            </select>

            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Exporter</span>
            </button>
          </div>
        </div>

        {/* Radiology Results List */}
        <div className="space-y-6">
          {filteredResults.map((result, index) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                        {result.patient.firstname} {result.patient.lastname}
                      </h3>
                      <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(result.status)}`}>
                        {getStatusIcon(result.status)}
                        <span>{getStatusText(result.status)}</span>
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(result.type)}`}>
                        {getTypeText(result.type)}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {result.createdAt.toLocaleDateString('fr-FR')}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Stethoscope className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {result.requestedBy.firstname} {result.requestedBy.lastname}
                        </span>
                      </div>
                      {result.completedAt && (
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            Terminé le {result.completedAt.toLocaleDateString('fr-FR')}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Image Preview */}
                    <div className="bg-white dark:bg-gray-600 rounded-lg p-4 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-24 h-24 bg-gray-200 dark:bg-gray-500 rounded-lg overflow-hidden">
                          <img 
                            src={result.imageUrl} 
                            alt="Radiographie" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                            Radiographie {getTypeText(result.type)}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            {result.medicalFile.description}
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-500">
                            <span>Réalisé par: {result.performedBy.firstname} {result.performedBy.lastname}</span>
                            {result.reviewedBy && (
                              <span>Validé par: {result.reviewedBy.firstname} {result.reviewedBy.lastname}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Findings */}
                    {result.findings && (
                      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
                        <h4 className="font-medium text-blue-900 dark:text-blue-300 mb-2">Observations:</h4>
                        <p className="text-sm text-blue-800 dark:text-blue-400">{result.findings}</p>
                      </div>
                    )}

                    {/* Recommendations */}
                    {result.recommendations && (
                      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-4">
                        <h4 className="font-medium text-green-900 dark:text-green-300 mb-2">Recommandations:</h4>
                        <p className="text-sm text-green-800 dark:text-green-400">{result.recommendations}</p>
                      </div>
                    )}

                    {/* Notes */}
                    {result.notes && (
                      <div className="bg-gray-100 dark:bg-gray-600 rounded-lg p-3">
                        <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">Notes techniques:</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{result.notes}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-2 ml-4">
                  <button className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-lg transition-colors" title="Voir en grand">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-green-600 hover:bg-green-100 dark:hover:bg-green-900/20 rounded-lg transition-colors" title="Télécharger">
                    <Download className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-purple-600 hover:bg-purple-100 dark:hover:bg-purple-900/20 rounded-lg transition-colors" title="Rapport">
                    <FileText className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-orange-600 hover:bg-orange-100 dark:hover:bg-orange-900/20 rounded-lg transition-colors" title="Analyser">
                    <Zap className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredResults.length === 0 && (
          <div className="text-center py-12">
            <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Aucun examen radiologique trouvé</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Créez un nouvel examen ou modifiez vos critères de recherche.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default RadiologyPage;