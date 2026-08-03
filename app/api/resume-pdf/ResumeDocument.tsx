import { Document, Page, View, Text, Link, StyleSheet } from "@react-pdf/renderer";
import type { ResumePageData } from "@/types/cms";

const COLORS = {
  accent: "#4338CA",
  accentSoft: "#EEF2FF",
  textDark: "#111827",
  textBody: "#374151",
  textMuted: "#6B7280",
  line: "#E5E7EB",
};

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9.5,
    color: COLORS.textBody,
    paddingTop: 36,
    paddingBottom: 40,
    paddingHorizontal: 44,
  },
  topBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 5,
    backgroundColor: COLORS.accent,
  },
  name: {
    fontSize: 23,
    fontFamily: "Helvetica-Bold",
    color: COLORS.textDark,
    letterSpacing: 0.3,
  },
  role: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: COLORS.accent,
    marginTop: 3,
  },
  techLine: {
    fontSize: 8.3,
    color: COLORS.textMuted,
    marginTop: 5,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
    gap: 4,
  },
  contactText: {
    fontSize: 8.3,
    color: COLORS.textMuted,
  },
  contactSep: {
    fontSize: 8.3,
    color: COLORS.line,
  },
  headerDivider: {
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.accent,
    marginTop: 14,
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 11.5,
    fontFamily: "Helvetica-Bold",
    color: COLORS.accent,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 8,
  },
  sectionRule: {
    borderBottomWidth: 0.75,
    borderBottomColor: COLORS.line,
    marginBottom: 12,
  },
  sectionBlock: {
    marginBottom: 18,
  },
  paragraph: {
    fontSize: 9.3,
    lineHeight: 1.5,
    color: COLORS.textBody,
    marginBottom: 6,
  },
  jobBlock: {
    marginBottom: 14,
    paddingBottom: 14,
    borderBottomWidth: 0.75,
    borderBottomColor: COLORS.line,
  },
  jobHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  jobRole: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: COLORS.textDark,
  },
  jobPeriod: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: COLORS.accent,
  },
  jobMeta: {
    fontSize: 9,
    color: COLORS.textMuted,
    marginTop: 2,
    marginBottom: 8,
  },
  projectGroup: {
    marginTop: 4,
    marginBottom: 8,
  },
  projectLabel: {
    fontSize: 8.8,
    fontFamily: "Helvetica-Bold",
    color: COLORS.textDark,
    marginBottom: 4,
  },
  projectLabelPrefix: {
    color: COLORS.accent,
    textTransform: "uppercase",
  },
  bulletRow: {
    flexDirection: "row",
    marginBottom: 3,
    paddingRight: 4,
  },
  bulletMark: {
    fontSize: 8.5,
    color: COLORS.accent,
    width: 10,
  },
  bulletText: {
    fontSize: 9,
    lineHeight: 1.45,
    color: COLORS.textBody,
    flex: 1,
  },
  skillCategory: {
    marginBottom: 10,
  },
  skillCategoryTitle: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: COLORS.textDark,
    marginBottom: 5,
  },
  chipsWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  skillChip: {
    fontSize: 7.6,
    color: COLORS.accent,
    backgroundColor: COLORS.accentSoft,
    borderWidth: 0.75,
    borderColor: "#C7D2FE",
    paddingVertical: 2.5,
    paddingHorizontal: 6,
    borderRadius: 3,
  },
  projectCard: {
    marginBottom: 9,
  },
  projectCardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  projectCardName: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: COLORS.accent,
  },
  projectCardStack: {
    fontSize: 8.3,
    color: COLORS.textMuted,
  },
  projectCardUrl: {
    fontSize: 8,
    color: COLORS.textMuted,
    marginTop: 1,
  },
  eduBlock: {
    marginBottom: 10,
  },
  eduRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  eduDegree: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: COLORS.textDark,
  },
  eduPeriod: {
    fontSize: 8.5,
    fontFamily: "Helvetica-Bold",
    color: COLORS.accent,
  },
  eduInstitution: {
    fontSize: 9,
    color: COLORS.textMuted,
    marginTop: 1,
  },
});

function SectionTitle({ children }: { children: string }) {
  return (
    <>
      <Text style={styles.sectionTitle}>{children}</Text>
      <View style={styles.sectionRule} />
    </>
  );
}

interface ResumeDocumentProps {
  data: ResumePageData;
}

export default function ResumeDocument({ data }: ResumeDocumentProps) {
  const contactItems = [
    data.email,
    data.phone,
    data.location,
    ...data.social.map((s) => s.url.replace(/^https?:\/\//, "")),
    data.portfolioUrl.replace(/^https?:\/\//, ""),
  ];

  return (
    <Document title={`${data.name} Resume`} author={data.name}>
      <Page size="A4" style={styles.page}>
        <View style={styles.topBar} fixed />

        {/* Header */}
        <View>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.role}>{data.role}</Text>
          <Text style={styles.techLine}>{data.techLine}</Text>
          <View style={styles.contactRow}>
            {contactItems.map((item, i) => (
              <Text key={item}>
                <Text style={styles.contactText}>{item}</Text>
                {i < contactItems.length - 1 && <Text style={styles.contactSep}>   •   </Text>}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.headerDivider} />

        {/* Profile */}
        <View style={styles.sectionBlock}>
          <SectionTitle>Profile</SectionTitle>
          {data.summary.map((paragraph, i) => (
            <Text key={i} style={styles.paragraph}>
              {paragraph}
            </Text>
          ))}
        </View>

        {/* Experience */}
        <View style={styles.sectionBlock}>
          <SectionTitle>Experience</SectionTitle>
          {data.experience.map((exp, i) => (
            <View key={i} style={i === data.experience.length - 1 ? { marginBottom: 14 } : styles.jobBlock}>
              <View style={styles.jobHeaderRow}>
                <Text style={styles.jobRole}>
                  {exp.role} · {exp.company}
                  {exp.employmentType ? ` (${exp.employmentType})` : ""}
                </Text>
                <Text style={styles.jobPeriod}>{exp.period}</Text>
              </View>
              <Text style={styles.jobMeta}>{exp.location}</Text>
              {exp.projectGroups?.map((group, gi) => (
                <View key={gi} style={styles.projectGroup} wrap={false}>
                  <Text style={styles.projectLabel}>
                    <Text style={styles.projectLabelPrefix}>{group.label}: </Text>
                    {group.chips.join(" · ")}
                  </Text>
                  {group.bullets.map((bullet, bi) => (
                    <View key={bi} style={styles.bulletRow}>
                      <Text style={styles.bulletMark}>{"›"}</Text>
                      <Text style={styles.bulletText}>{bullet}</Text>
                    </View>
                  ))}
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* Skills */}
        <View style={styles.sectionBlock}>
          <SectionTitle>Technical Skills</SectionTitle>
          {data.skillCategories.map((category) => (
            <View key={category.title} style={styles.skillCategory} wrap={false}>
              <Text style={styles.skillCategoryTitle}>{category.title}</Text>
              <View style={styles.chipsWrap}>
                {category.skills.map((skill) => (
                  <Text key={skill} style={styles.skillChip}>
                    {skill}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Personal Projects */}
        <View style={styles.sectionBlock}>
          <SectionTitle>{data.labels.personalProjectsTitle}</SectionTitle>
          {data.personalProjects.map((project) => (
            <View key={project.name} style={styles.projectCard} wrap={false}>
              <View style={styles.projectCardRow}>
                <Link href={project.url} style={styles.projectCardName}>
                  {project.name}
                </Link>
                <Text style={styles.projectCardStack}>{project.techStack}</Text>
              </View>
              <Text style={styles.projectCardUrl}>{project.url}</Text>
            </View>
          ))}
        </View>

        {/* Education */}
        <View>
          <SectionTitle>{data.labels.educationTitle}</SectionTitle>
          {data.education.map((edu, i) => (
            <View key={i} style={styles.eduBlock} wrap={false}>
              <View style={styles.eduRow}>
                <Text style={styles.eduDegree}>{edu.degree}</Text>
                <Text style={styles.eduPeriod}>{edu.period}</Text>
              </View>
              <Text style={styles.eduInstitution}>{edu.institution}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
