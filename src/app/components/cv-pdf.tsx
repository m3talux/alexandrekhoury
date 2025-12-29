'use client'

import {Document, Page, Text, View, StyleSheet, Font, pdf} from '@react-pdf/renderer'
import cvData from '@/data/cv.json'

Font.register({
    family: 'Inter',
    fonts: [
        {src: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff', fontWeight: 400},
        {src: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZ9hjp-Ek-_EeA.woff', fontWeight: 500},
        {src: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hjp-Ek-_EeA.woff', fontWeight: 600},
        {src: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hjp-Ek-_EeA.woff', fontWeight: 700},
    ],
})

const colors = {
    primary: '#3b82f6',
    text: '#1e293b',
    muted: '#64748b',
    light: '#f1f5f9',
    white: '#ffffff',
}

const styles = StyleSheet.create({
    page: {
        fontFamily: 'Inter',
        fontSize: 10,
        padding: 32,
        backgroundColor: colors.white,
        color: colors.text,
    },
    header: {
        marginBottom: 14,
    },
    name: {
        fontSize: 24,
        fontWeight: 700,
        color: colors.text,
        marginBottom: 4,
    },
    title: {
        fontSize: 14,
        fontWeight: 500,
        color: colors.primary,
        marginBottom: 8,
    },
    contactRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 16,
    },
    contactItem: {
        fontSize: 9,
        color: colors.muted,
    },
    section: {
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 11,
        fontWeight: 700,
        color: colors.primary,
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 8,
        paddingBottom: 4,
        borderBottomWidth: 1,
        borderBottomColor: colors.light,
    },
    summary: {
        fontSize: 10,
        lineHeight: 1.5,
        color: colors.text,
    },
    experienceItem: {
        marginBottom: 8,
    },
    experienceHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2,
    },
    experienceTitle: {
        fontSize: 11,
        fontWeight: 600,
        color: colors.text,
    },
    experiencePeriod: {
        fontSize: 9,
        color: colors.muted,
    },
    experienceCompany: {
        fontSize: 10,
        fontWeight: 500,
        color: colors.primary,
        marginBottom: 4,
    },
    achievementList: {
        marginLeft: 12,
    },
    achievement: {
        fontSize: 9,
        lineHeight: 1.4,
        color: colors.text,
        marginBottom: 2,
    },
    bullet: {
        color: colors.primary,
        marginRight: 6,
    },
    achievementRow: {
        flexDirection: 'row',
        marginBottom: 2,
    },
    twoColumn: {
        flexDirection: 'row',
        gap: 24,
    },
    leftColumn: {
        flex: 2,
    },
    rightColumn: {
        flex: 1,
    },
    skillCategory: {
        marginBottom: 5,
    },
    skillCategoryTitle: {
        fontSize: 10,
        fontWeight: 600,
        color: colors.text,
        marginBottom: 3,
    },
    skillList: {
        fontSize: 9,
        color: colors.muted,
        lineHeight: 1.4,
    },
    educationTitle: {
        fontSize: 10,
        fontWeight: 600,
        color: colors.text,
    },
    educationInstitution: {
        fontSize: 9,
        color: colors.primary,
        marginBottom: 2,
    },
    educationDetails: {
        fontSize: 9,
        color: colors.muted,
    },
    languageItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 3,
    },
    languageName: {
        fontSize: 9,
        color: colors.text,
    },
    languageLevel: {
        fontSize: 9,
        color: colors.muted,
    },
    projectItem: {
        marginBottom: 6,
    },
    projectName: {
        fontSize: 10,
        fontWeight: 600,
        color: colors.text,
    },
    projectRole: {
        fontSize: 8,
        color: colors.primary,
    },
    projectDescription: {
        fontSize: 8,
        color: colors.muted,
    },
})

function CVDocument() {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.name}>{cvData.personal.name}</Text>
                    <Text style={styles.title}>{cvData.personal.title}</Text>
                    <View style={styles.contactRow}>
                        <Text style={styles.contactItem}>{cvData.personal.email}</Text>
                        <Text style={styles.contactItem}>{cvData.personal.location}</Text>
                        <Text style={styles.contactItem}>{cvData.personal.linkedin}</Text>
                        <Text style={styles.contactItem}>{cvData.personal.website}</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Summary</Text>
                    <Text style={styles.summary}>{cvData.summary}</Text>
                </View>

                <View style={styles.twoColumn}>
                    <View style={styles.leftColumn}>
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Experience</Text>
                            {cvData.experience.map((exp, index) => (
                                <View key={index} style={styles.experienceItem}>
                                    <View style={styles.experienceHeader}>
                                        <Text style={styles.experienceTitle}>{exp.title}</Text>
                                        <Text style={styles.experiencePeriod}>{exp.period}</Text>
                                    </View>
                                    <Text style={styles.experienceCompany}>{exp.company} • {exp.location}</Text>
                                    <View style={styles.achievementList}>
                                        {exp.achievements.map((achievement, i) => (
                                            <View key={i} style={styles.achievementRow}>
                                                <Text style={styles.bullet}>•</Text>
                                                <Text style={styles.achievement}>{achievement}</Text>
                                            </View>
                                        ))}
                                    </View>
                                </View>
                            ))}
                        </View>

                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Education</Text>
                            <Text style={styles.educationTitle}>{cvData.education.degree}</Text>
                            <Text style={styles.educationInstitution}>{cvData.education.institution}</Text>
                            <Text style={styles.educationDetails}>{cvData.education.location} • {cvData.education.period}</Text>
                        </View>
                    </View>

                    <View style={styles.rightColumn}>
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Skills</Text>
                            <View style={styles.skillCategory}>
                                <Text style={styles.skillCategoryTitle}>Languages</Text>
                                <Text style={styles.skillList}>{cvData.skills.languages.join(', ')}</Text>
                            </View>
                            <View style={styles.skillCategory}>
                                <Text style={styles.skillCategoryTitle}>Backend</Text>
                                <Text style={styles.skillList}>{cvData.skills.backend.join(', ')}</Text>
                            </View>
                            <View style={styles.skillCategory}>
                                <Text style={styles.skillCategoryTitle}>Databases</Text>
                                <Text style={styles.skillList}>{cvData.skills.databases.join(', ')}</Text>
                            </View>
                            <View style={styles.skillCategory}>
                                <Text style={styles.skillCategoryTitle}>Frontend</Text>
                                <Text style={styles.skillList}>{cvData.skills.frontend.join(', ')}</Text>
                            </View>
                            <View style={styles.skillCategory}>
                                <Text style={styles.skillCategoryTitle}>DevOps</Text>
                                <Text style={styles.skillList}>{cvData.skills.devops.join(', ')}</Text>
                            </View>
                        </View>

                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Spoken Languages</Text>
                            {cvData.languages.map((lang, index) => (
                                <View key={index} style={styles.languageItem}>
                                    <Text style={styles.languageName}>{lang.name}</Text>
                                    <Text style={styles.languageLevel}>{lang.level}</Text>
                                </View>
                            ))}
                        </View>

                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Side Projects</Text>
                            {cvData.projects.map((project, index) => (
                                <View key={index} style={styles.projectItem}>
                                    <Text style={styles.projectName}>{project.name}</Text>
                                    <Text style={styles.projectRole}>{project.role}</Text>
                                    <Text style={styles.projectDescription}>{project.description}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export async function generateCV(): Promise<Blob> {
    const blob = await pdf(<CVDocument/>).toBlob()
    return blob
}

export function downloadCV() {
    generateCV().then((blob) => {
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = 'alexandre_el_khoury_cv.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
    })
}
