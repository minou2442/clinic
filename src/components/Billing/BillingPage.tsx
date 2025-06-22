import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Filter, DollarSign, Calendar, User, FileText, Clock, CheckCircle, XCircle, AlertTriangle, Eye, Edit, Download, Printer as Print, CreditCard, Banknote, Receipt, TrendingUp } from 'lucide-react';
import { Facture, Payment } from '../../types';
import { useAuth } from '../../contexts/AuthContext';

const BillingPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'paid' | 'partial' | 'unpaid' | 'refunded' | 'cancelled'>('all');
  const [filterPaymentMethod, setFilterPaymentMethod] = useState<'all' | 'cash' | 'card' | 'transfer' | 'check' | 'insurance'>('all');
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const { user } = useAuth();

  // Mock billing data
  const mockFactures: Facture[] = [
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
      doctor: {
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
      services: [
        {
          id: '1',
          name: 'Consultation orthodontique',
          description: 'Consultation de suivi orthodontique',
          basePrice: 3500,
          durationMinutes: 30,
          category: 'consultation',
          isActive: true
        },
        {
          id: '2',
          name: 'Ajustement appareil',
          description: 'Ajustement et activation de l\'appareil orthodontique',
          basePrice: 2500,
          durationMinutes: 45,
          category: 'treatment',
          isActive: true
        }
      ],
      totalAmount: 6000,
      amountPaid: 6000,
      discount: 0,
      tax: 0,
      paymentMethod: 'card',
      status: 'paid',
      date: new Date('2024-01-20'),
      createdBy: user!,
      notes: 'Paiement par carte bancaire',
      isPrinted: true,
      barcode: 'FAC-2024-001',
      receiptNumber: 'REC-001-2024',
      paymentHistory: [
        {
          id: '1',
          amount: 6000,
          method: 'card',
          reference: 'CB-20240120-001',
          receivedBy: user!,
          createdAt: new Date('2024-01-20')
        }
      ],
      createdAt: new Date('2024-01-20'),
      updatedAt: new Date('2024-01-20')
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
      doctor: {
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
      services: [
        {
          id: '3',
          name: 'Implant dentaire',
          description: 'Pose d\'implant dentaire avec couronne',
          basePrice: 75000,
          durationMinutes: 120,
          category: 'surgery',
          isActive: true
        }
      ],
      totalAmount: 75000,
      amountPaid: 30000,
      discount: 0,
      tax: 0,
      paymentMethod: 'cash',
      status: 'partial',
      date: new Date('2024-01-18'),
      dueDate: new Date('2024-02-18'),
      createdBy: user!,
      notes: 'Paiement échelonné - Acompte versé',
      isPrinted: false,
      barcode: 'FAC-2024-002',
      receiptNumber: 'REC-002-2024',
      paymentHistory: [
        {
          id: '2',
          amount: 30000,
          method: 'cash',
          receivedBy: user!,
          createdAt: new Date('2024-01-18')
        }
      ],
      createdAt: new Date('2024-01-18'),
      updatedAt: new Date('2024-01-18')
    },
    {
      id: '3',
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
      doctor: {
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
      services: [
        {
          id: '4',
          name: 'Consultation d\'urgence',
          description: 'Consultation d\'urgence dentaire',
          basePrice: 5000,
          durationMinutes: 20,
          category: 'consultation',
          isActive: true
        }
      ],
      totalAmount: 5000,
      amountPaid: 0,
      discount: 0,
      tax: 0,
      paymentMethod: 'cash',
      status: 'unpaid',
      date: new Date('2024-01-19'),
      dueDate: new Date('2024-01-26'),
      createdBy: user!,
      notes: 'Paiement en attente',
      isPrinted: false,
      barcode: 'FAC-2024-003',
      receiptNumber: 'REC-003-2024',
      paymentHistory: [],
      createdAt: new Date('2024-01-19'),
      updatedAt: new Date('2024-01-19')
    }
  ];

  const filteredFactures = mockFactures.filter(facture => {
    const matchesSearch = 
      facture.patient.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      facture.patient.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      facture.receiptNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      facture.barcode.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = filterStatus === 'all' || facture.status === filterStatus;
    const matchesPaymentMethod = filterPaymentMethod === 'all' || facture.paymentMethod === filterPaymentMethod;

    return matchesSearch && matchesStatus && matchesPaymentMethod;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'text-green-600 bg-green-100 dark:bg-green-900/20 dark:text-green-400';
      case 'partial': return 'text-orange-600 bg-orange-100 dark:bg-orange-900/20 dark:text-orange-400';
      case 'unpaid': return 'text-red-600 bg-red-100 dark:bg-red-900/20 dark:text-red-400';
      case 'refunded': return 'text-purple-600 bg-purple-100 dark:bg-purple-900/20 dark:text-purple-400';
      case 'cancelled': return 'text-gray-600 bg-gray-100 dark:bg-gray-900/20 dark:text-gray-400';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'paid': return <CheckCircle className="w-4 h-4" />;
      case 'partial': return <Clock className="w-4 h-4" />;
      case 'unpaid': return <XCircle className="w-4 h-4" />;
      case 'refunded': return <TrendingUp className="w-4 h-4" />;
      case 'cancelled': return <XCircle className="w-4 h-4" />;
      default: return <AlertTriangle className="w-4 h-4" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'paid': return 'Payé';
      case 'partial': return 'Partiel';
      case 'unpaid': return 'Impayé';
      case 'refunded': return 'Remboursé';
      case 'cancelled': return 'Annulé';
      default: return status;
    }
  };

  const getPaymentMethodIcon = (method: string) => {
    switch (method) {
      case 'cash': return <Banknote className="w-4 h-4" />;
      case 'card': return <CreditCard className="w-4 h-4" />;
      case 'transfer': return <TrendingUp className="w-4 h-4" />;
      case 'check': return <Receipt className="w-4 h-4" />;
      case 'insurance': return <FileText className="w-4 h-4" />;
      default: return <DollarSign className="w-4 h-4" />;
    }
  };

  const getPaymentMethodText = (method: string) => {
    switch (method) {
      case 'cash': return 'Espèces';
      case 'card': return 'Carte';
      case 'transfer': return 'Virement';
      case 'check': return 'Chèque';
      case 'insurance': return 'Assurance';
      default: return method;
    }
  };

  // Statistics
  const totalFactures = filteredFactures.length;
  const totalAmount = filteredFactures.reduce((sum, f) => sum + f.totalAmount, 0);
  const totalPaid = filteredFactures.reduce((sum, f) => sum + f.amountPaid, 0);
  const unpaidFactures = filteredFactures.filter(f => f.status === 'unpaid').length;
  const partialFactures = filteredFactures.filter(f => f.status === 'partial').length;

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Facturation</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Gestion des factures et paiements
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
            <Receipt className="w-5 h-5" />
            <span>Encaisser</span>
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Nouvelle Facture</span>
          </button>
        </div>
      </motion.div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Total Factures</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{totalFactures}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
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
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Montant Total</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{totalAmount.toLocaleString()} DA</p>
            </div>
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
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
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Montant Encaissé</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{totalPaid.toLocaleString()} DA</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
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
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Impayées</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{unpaidFactures}</p>
            </div>
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center">
              <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Partielles</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{partialFactures}</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher par patient, numéro de facture..."
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
              <option value="paid">Payées</option>
              <option value="partial">Partielles</option>
              <option value="unpaid">Impayées</option>
              <option value="refunded">Remboursées</option>
              <option value="cancelled">Annulées</option>
            </select>

            <select
              value={filterPaymentMethod}
              onChange={(e) => setFilterPaymentMethod(e.target.value as any)}
              className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              <option value="all">Tous les modes</option>
              <option value="cash">Espèces</option>
              <option value="card">Carte</option>
              <option value="transfer">Virement</option>
              <option value="check">Chèque</option>
              <option value="insurance">Assurance</option>
            </select>

            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              <option value="week">Cette semaine</option>
              <option value="month">Ce mois</option>
              <option value="quarter">Ce trimestre</option>
              <option value="year">Cette année</option>
            </select>

            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Exporter</span>
            </button>
          </div>
        </div>

        {/* Billing List */}
        <div className="space-y-4">
          {filteredFactures.map((facture, index) => (
            <motion.div
              key={facture.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                        {facture.patient.firstname} {facture.patient.lastname}
                      </h3>
                      <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(facture.status)}`}>
                        {getStatusIcon(facture.status)}
                        <span>{getStatusText(facture.status)}</span>
                      </span>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 rounded-full text-xs font-medium">
                        {facture.receiptNumber}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {facture.date.toLocaleDateString('fr-FR')}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Dr. {facture.doctor.firstname} {facture.doctor.lastname}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getPaymentMethodIcon(facture.paymentMethod)}
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {getPaymentMethodText(facture.paymentMethod)}
                        </span>
                      </div>
                      {facture.dueDate && facture.status !== 'paid' && (
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            Échéance: {facture.dueDate.toLocaleDateString('fr-FR')}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Services */}
                    <div className="bg-white dark:bg-gray-600 rounded-lg p-4 mb-4">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">Services facturés:</h4>
                      <div className="space-y-2">
                        {facture.services.map((service, idx) => (
                          <div key={idx} className="flex items-center justify-between">
                            <div>
                              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{service.name}</span>
                              {service.description && (
                                <p className="text-xs text-gray-600 dark:text-gray-400">{service.description}</p>
                              )}
                            </div>
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                              {service.basePrice.toLocaleString()} DA
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Payment Summary */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <span className="text-sm text-blue-700 dark:text-blue-300">Montant total:</span>
                          <p className="text-lg font-bold text-blue-900 dark:text-blue-100">
                            {facture.totalAmount.toLocaleString()} DA
                          </p>
                        </div>
                        <div>
                          <span className="text-sm text-blue-700 dark:text-blue-300">Montant payé:</span>
                          <p className="text-lg font-bold text-blue-900 dark:text-blue-100">
                            {facture.amountPaid.toLocaleString()} DA
                          </p>
                        </div>
                        <div>
                          <span className="text-sm text-blue-700 dark:text-blue-300">Reste à payer:</span>
                          <p className="text-lg font-bold text-blue-900 dark:text-blue-100">
                            {(facture.totalAmount - facture.amountPaid).toLocaleString()} DA
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Payment History */}
                    {facture.paymentHistory.length > 0 && (
                      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                        <h4 className="font-medium text-green-900 dark:text-green-300 mb-2">Historique des paiements:</h4>
                        <div className="space-y-1">
                          {facture.paymentHistory.map((payment) => (
                            <div key={payment.id} className="flex items-center justify-between text-sm">
                              <span className="text-green-800 dark:text-green-400">
                                {payment.createdAt.toLocaleDateString('fr-FR')} - {getPaymentMethodText(payment.method)}
                                {payment.reference && ` (${payment.reference})`}
                              </span>
                              <span className="font-medium text-green-900 dark:text-green-300">
                                {payment.amount.toLocaleString()} DA
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Notes */}
                    {facture.notes && (
                      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-medium">Notes: </span>
                        {facture.notes}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-2 ml-4">
                  <button className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-lg transition-colors" title="Voir">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-green-600 hover:bg-green-100 dark:hover:bg-green-900/20 rounded-lg transition-colors" title="Modifier">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-purple-600 hover:bg-purple-100 dark:hover:bg-purple-900/20 rounded-lg transition-colors" title="Imprimer">
                    <Print className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-orange-600 hover:bg-orange-100 dark:hover:bg-orange-900/20 rounded-lg transition-colors" title="Télécharger">
                    <Download className="w-4 h-4" />
                  </button>
                  {facture.status !== 'paid' && (
                    <button className="p-2 text-green-600 hover:bg-green-100 dark:hover:bg-green-900/20 rounded-lg transition-colors" title="Encaisser">
                      <Receipt className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredFactures.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Aucune facture trouvée</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Créez une nouvelle facture ou modifiez vos critères de recherche.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default BillingPage;