export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      direction_experiences: {
        Row: {
          direction_id: string
          experience_id: string
          profile_id: string
        }
        Insert: {
          direction_id: string
          experience_id: string
          profile_id: string
        }
        Update: {
          direction_id?: string
          experience_id?: string
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "direction_experiences_profile_id_direction_id_fkey"
            columns: ["profile_id", "direction_id"]
            isOneToOne: false
            referencedRelation: "directions"
            referencedColumns: ["profile_id", "id"]
          },
          {
            foreignKeyName: "direction_experiences_profile_id_experience_id_fkey"
            columns: ["profile_id", "experience_id"]
            isOneToOne: false
            referencedRelation: "experiences"
            referencedColumns: ["profile_id", "id"]
          },
          {
            foreignKeyName: "direction_experiences_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      direction_projects: {
        Row: {
          direction_id: string
          profile_id: string
          project_id: string
        }
        Insert: {
          direction_id: string
          profile_id: string
          project_id: string
        }
        Update: {
          direction_id?: string
          profile_id?: string
          project_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "direction_projects_profile_id_direction_id_fkey"
            columns: ["profile_id", "direction_id"]
            isOneToOne: false
            referencedRelation: "directions"
            referencedColumns: ["profile_id", "id"]
          },
          {
            foreignKeyName: "direction_projects_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "direction_projects_profile_id_project_id_fkey"
            columns: ["profile_id", "project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["profile_id", "id"]
          },
        ]
      }
      direction_skills: {
        Row: {
          direction_id: string
          profile_id: string
          relation_type: string
          skill_id: string
        }
        Insert: {
          direction_id: string
          profile_id: string
          relation_type: string
          skill_id: string
        }
        Update: {
          direction_id?: string
          profile_id?: string
          relation_type?: string
          skill_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "direction_skills_profile_id_direction_id_fkey"
            columns: ["profile_id", "direction_id"]
            isOneToOne: false
            referencedRelation: "directions"
            referencedColumns: ["profile_id", "id"]
          },
          {
            foreignKeyName: "direction_skills_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "direction_skills_profile_id_skill_id_fkey"
            columns: ["profile_id", "skill_id"]
            isOneToOne: false
            referencedRelation: "skills"
            referencedColumns: ["profile_id", "id"]
          },
        ]
      }
      directions: {
        Row: {
          advantages: string | null
          compatibility: string | null
          conclusion: string | null
          created_at: string
          description: string | null
          disadvantages: string | null
          domains: string[] | null
          id: string
          import_key: string | null
          interest: string | null
          kind: string | null
          next_step: string | null
          profile_id: string
          source_document: string | null
          status: string | null
          title: string
          updated_at: string
        }
        Insert: {
          advantages?: string | null
          compatibility?: string | null
          conclusion?: string | null
          created_at?: string
          description?: string | null
          disadvantages?: string | null
          domains?: string[] | null
          id?: string
          import_key?: string | null
          interest?: string | null
          kind?: string | null
          next_step?: string | null
          profile_id: string
          source_document?: string | null
          status?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          advantages?: string | null
          compatibility?: string | null
          conclusion?: string | null
          created_at?: string
          description?: string | null
          disadvantages?: string | null
          domains?: string[] | null
          id?: string
          import_key?: string | null
          interest?: string | null
          kind?: string | null
          next_step?: string | null
          profile_id?: string
          source_document?: string | null
          status?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "directions_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      education: {
        Row: {
          applied_in_practice: boolean | null
          created_at: string
          domains: string[] | null
          end_year: number | null
          ended_on: string | null
          id: string
          import_key: string | null
          institution: string | null
          instructor: string | null
          kind: string | null
          learning_notes: string | null
          period_label: string | null
          practice_notes: string | null
          profile_id: string
          program: string | null
          qualification: string | null
          results_note: string | null
          source_document: string | null
          start_year: number | null
          started_on: string | null
          status: string | null
          study_mode: string | null
          title: string
          updated_at: string
        }
        Insert: {
          applied_in_practice?: boolean | null
          created_at?: string
          domains?: string[] | null
          end_year?: number | null
          ended_on?: string | null
          id?: string
          import_key?: string | null
          institution?: string | null
          instructor?: string | null
          kind?: string | null
          learning_notes?: string | null
          period_label?: string | null
          practice_notes?: string | null
          profile_id: string
          program?: string | null
          qualification?: string | null
          results_note?: string | null
          source_document?: string | null
          start_year?: number | null
          started_on?: string | null
          status?: string | null
          study_mode?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          applied_in_practice?: boolean | null
          created_at?: string
          domains?: string[] | null
          end_year?: number | null
          ended_on?: string | null
          id?: string
          import_key?: string | null
          institution?: string | null
          instructor?: string | null
          kind?: string | null
          learning_notes?: string | null
          period_label?: string | null
          practice_notes?: string | null
          profile_id?: string
          program?: string | null
          qualification?: string | null
          results_note?: string | null
          source_document?: string | null
          start_year?: number | null
          started_on?: string | null
          status?: string | null
          study_mode?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "education_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      education_languages: {
        Row: {
          education_id: string
          language_id: string
          profile_id: string
        }
        Insert: {
          education_id: string
          language_id: string
          profile_id: string
        }
        Update: {
          education_id?: string
          language_id?: string
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "education_languages_profile_id_education_id_fkey"
            columns: ["profile_id", "education_id"]
            isOneToOne: false
            referencedRelation: "education"
            referencedColumns: ["profile_id", "id"]
          },
          {
            foreignKeyName: "education_languages_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "education_languages_profile_id_language_id_fkey"
            columns: ["profile_id", "language_id"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["profile_id", "id"]
          },
        ]
      }
      education_projects: {
        Row: {
          education_id: string
          profile_id: string
          project_id: string
        }
        Insert: {
          education_id: string
          profile_id: string
          project_id: string
        }
        Update: {
          education_id?: string
          profile_id?: string
          project_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "education_projects_profile_id_education_id_fkey"
            columns: ["profile_id", "education_id"]
            isOneToOne: false
            referencedRelation: "education"
            referencedColumns: ["profile_id", "id"]
          },
          {
            foreignKeyName: "education_projects_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "education_projects_profile_id_project_id_fkey"
            columns: ["profile_id", "project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["profile_id", "id"]
          },
        ]
      }
      education_skills: {
        Row: {
          education_id: string
          profile_id: string
          skill_id: string
        }
        Insert: {
          education_id: string
          profile_id: string
          skill_id: string
        }
        Update: {
          education_id?: string
          profile_id?: string
          skill_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "education_skills_profile_id_education_id_fkey"
            columns: ["profile_id", "education_id"]
            isOneToOne: false
            referencedRelation: "education"
            referencedColumns: ["profile_id", "id"]
          },
          {
            foreignKeyName: "education_skills_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "education_skills_profile_id_skill_id_fkey"
            columns: ["profile_id", "skill_id"]
            isOneToOne: false
            referencedRelation: "skills"
            referencedColumns: ["profile_id", "id"]
          },
        ]
      }
      education_tools: {
        Row: {
          education_id: string
          profile_id: string
          tool_id: string
        }
        Insert: {
          education_id: string
          profile_id: string
          tool_id: string
        }
        Update: {
          education_id?: string
          profile_id?: string
          tool_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "education_tools_profile_id_education_id_fkey"
            columns: ["profile_id", "education_id"]
            isOneToOne: false
            referencedRelation: "education"
            referencedColumns: ["profile_id", "id"]
          },
          {
            foreignKeyName: "education_tools_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "education_tools_profile_id_tool_id_fkey"
            columns: ["profile_id", "tool_id"]
            isOneToOne: false
            referencedRelation: "tools"
            referencedColumns: ["profile_id", "id"]
          },
        ]
      }
      evidence: {
        Row: {
          created_at: string
          description: string | null
          id: string
          import_key: string | null
          kind: string | null
          profile_id: string
          source_document: string | null
          storage_path: string | null
          title: string
          updated_at: string
          url: string | null
          verification_status: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          import_key?: string | null
          kind?: string | null
          profile_id: string
          source_document?: string | null
          storage_path?: string | null
          title: string
          updated_at?: string
          url?: string | null
          verification_status?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          import_key?: string | null
          kind?: string | null
          profile_id?: string
          source_document?: string | null
          storage_path?: string | null
          title?: string
          updated_at?: string
          url?: string | null
          verification_status?: string
        }
        Relationships: [
          {
            foreignKeyName: "evidence_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      evidence_education: {
        Row: {
          education_id: string
          evidence_id: string
          profile_id: string
        }
        Insert: {
          education_id: string
          evidence_id: string
          profile_id: string
        }
        Update: {
          education_id?: string
          evidence_id?: string
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "evidence_education_profile_id_education_id_fkey"
            columns: ["profile_id", "education_id"]
            isOneToOne: false
            referencedRelation: "education"
            referencedColumns: ["profile_id", "id"]
          },
          {
            foreignKeyName: "evidence_education_profile_id_evidence_id_fkey"
            columns: ["profile_id", "evidence_id"]
            isOneToOne: false
            referencedRelation: "evidence"
            referencedColumns: ["profile_id", "id"]
          },
          {
            foreignKeyName: "evidence_education_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      evidence_experiences: {
        Row: {
          evidence_id: string
          experience_id: string
          profile_id: string
        }
        Insert: {
          evidence_id: string
          experience_id: string
          profile_id: string
        }
        Update: {
          evidence_id?: string
          experience_id?: string
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "evidence_experiences_profile_id_evidence_id_fkey"
            columns: ["profile_id", "evidence_id"]
            isOneToOne: false
            referencedRelation: "evidence"
            referencedColumns: ["profile_id", "id"]
          },
          {
            foreignKeyName: "evidence_experiences_profile_id_experience_id_fkey"
            columns: ["profile_id", "experience_id"]
            isOneToOne: false
            referencedRelation: "experiences"
            referencedColumns: ["profile_id", "id"]
          },
          {
            foreignKeyName: "evidence_experiences_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      evidence_languages: {
        Row: {
          evidence_id: string
          language_id: string
          profile_id: string
        }
        Insert: {
          evidence_id: string
          language_id: string
          profile_id: string
        }
        Update: {
          evidence_id?: string
          language_id?: string
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "evidence_languages_profile_id_evidence_id_fkey"
            columns: ["profile_id", "evidence_id"]
            isOneToOne: false
            referencedRelation: "evidence"
            referencedColumns: ["profile_id", "id"]
          },
          {
            foreignKeyName: "evidence_languages_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "evidence_languages_profile_id_language_id_fkey"
            columns: ["profile_id", "language_id"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["profile_id", "id"]
          },
        ]
      }
      evidence_projects: {
        Row: {
          evidence_id: string
          profile_id: string
          project_id: string
        }
        Insert: {
          evidence_id: string
          profile_id: string
          project_id: string
        }
        Update: {
          evidence_id?: string
          profile_id?: string
          project_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "evidence_projects_profile_id_evidence_id_fkey"
            columns: ["profile_id", "evidence_id"]
            isOneToOne: false
            referencedRelation: "evidence"
            referencedColumns: ["profile_id", "id"]
          },
          {
            foreignKeyName: "evidence_projects_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "evidence_projects_profile_id_project_id_fkey"
            columns: ["profile_id", "project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["profile_id", "id"]
          },
        ]
      }
      evidence_skills: {
        Row: {
          evidence_id: string
          profile_id: string
          skill_id: string
        }
        Insert: {
          evidence_id: string
          profile_id: string
          skill_id: string
        }
        Update: {
          evidence_id?: string
          profile_id?: string
          skill_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "evidence_skills_profile_id_evidence_id_fkey"
            columns: ["profile_id", "evidence_id"]
            isOneToOne: false
            referencedRelation: "evidence"
            referencedColumns: ["profile_id", "id"]
          },
          {
            foreignKeyName: "evidence_skills_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "evidence_skills_profile_id_skill_id_fkey"
            columns: ["profile_id", "skill_id"]
            isOneToOne: false
            referencedRelation: "skills"
            referencedColumns: ["profile_id", "id"]
          },
        ]
      }
      experience_languages: {
        Row: {
          experience_id: string
          language_id: string
          profile_id: string
        }
        Insert: {
          experience_id: string
          language_id: string
          profile_id: string
        }
        Update: {
          experience_id?: string
          language_id?: string
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "experience_languages_profile_id_experience_id_fkey"
            columns: ["profile_id", "experience_id"]
            isOneToOne: false
            referencedRelation: "experiences"
            referencedColumns: ["profile_id", "id"]
          },
          {
            foreignKeyName: "experience_languages_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "experience_languages_profile_id_language_id_fkey"
            columns: ["profile_id", "language_id"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["profile_id", "id"]
          },
        ]
      }
      experience_skills: {
        Row: {
          experience_id: string
          profile_id: string
          skill_id: string
        }
        Insert: {
          experience_id: string
          profile_id: string
          skill_id: string
        }
        Update: {
          experience_id?: string
          profile_id?: string
          skill_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "experience_skills_profile_id_experience_id_fkey"
            columns: ["profile_id", "experience_id"]
            isOneToOne: false
            referencedRelation: "experiences"
            referencedColumns: ["profile_id", "id"]
          },
          {
            foreignKeyName: "experience_skills_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "experience_skills_profile_id_skill_id_fkey"
            columns: ["profile_id", "skill_id"]
            isOneToOne: false
            referencedRelation: "skills"
            referencedColumns: ["profile_id", "id"]
          },
        ]
      }
      experience_tools: {
        Row: {
          experience_id: string
          profile_id: string
          tool_id: string
        }
        Insert: {
          experience_id: string
          profile_id: string
          tool_id: string
        }
        Update: {
          experience_id?: string
          profile_id?: string
          tool_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "experience_tools_profile_id_experience_id_fkey"
            columns: ["profile_id", "experience_id"]
            isOneToOne: false
            referencedRelation: "experiences"
            referencedColumns: ["profile_id", "id"]
          },
          {
            foreignKeyName: "experience_tools_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "experience_tools_profile_id_tool_id_fkey"
            columns: ["profile_id", "tool_id"]
            isOneToOne: false
            referencedRelation: "tools"
            referencedColumns: ["profile_id", "id"]
          },
        ]
      }
      experiences: {
        Row: {
          activities: string | null
          context: string | null
          created_at: string
          domains: string[] | null
          end_year: number | null
          ended_on: string | null
          id: string
          import_key: string | null
          kind: string | null
          learning: string | null
          location: string | null
          organization: string | null
          period_label: string | null
          personal_notes: string | null
          profile_id: string
          responsibilities: string | null
          results: string | null
          source_document: string | null
          start_year: number | null
          started_on: string | null
          title: string
          updated_at: string
          work_mode: string | null
        }
        Insert: {
          activities?: string | null
          context?: string | null
          created_at?: string
          domains?: string[] | null
          end_year?: number | null
          ended_on?: string | null
          id?: string
          import_key?: string | null
          kind?: string | null
          learning?: string | null
          location?: string | null
          organization?: string | null
          period_label?: string | null
          personal_notes?: string | null
          profile_id: string
          responsibilities?: string | null
          results?: string | null
          source_document?: string | null
          start_year?: number | null
          started_on?: string | null
          title: string
          updated_at?: string
          work_mode?: string | null
        }
        Update: {
          activities?: string | null
          context?: string | null
          created_at?: string
          domains?: string[] | null
          end_year?: number | null
          ended_on?: string | null
          id?: string
          import_key?: string | null
          kind?: string | null
          learning?: string | null
          location?: string | null
          organization?: string | null
          period_label?: string | null
          personal_notes?: string | null
          profile_id?: string
          responsibilities?: string | null
          results?: string | null
          source_document?: string | null
          start_year?: number | null
          started_on?: string | null
          title?: string
          updated_at?: string
          work_mode?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "experiences_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      languages: {
        Row: {
          comprehension_level: string | null
          created_at: string
          id: string
          import_key: string | null
          native_language: boolean | null
          overall_level: string | null
          profile_id: string
          reading_level: string | null
          self_assessed: boolean
          source_document: string | null
          speaking_level: string | null
          title: string
          updated_at: string
          usage_notes: string | null
          want_to_develop: boolean | null
          writing_level: string | null
        }
        Insert: {
          comprehension_level?: string | null
          created_at?: string
          id?: string
          import_key?: string | null
          native_language?: boolean | null
          overall_level?: string | null
          profile_id: string
          reading_level?: string | null
          self_assessed?: boolean
          source_document?: string | null
          speaking_level?: string | null
          title: string
          updated_at?: string
          usage_notes?: string | null
          want_to_develop?: boolean | null
          writing_level?: string | null
        }
        Update: {
          comprehension_level?: string | null
          created_at?: string
          id?: string
          import_key?: string | null
          native_language?: boolean | null
          overall_level?: string | null
          profile_id?: string
          reading_level?: string | null
          self_assessed?: boolean
          source_document?: string | null
          speaking_level?: string | null
          title?: string
          updated_at?: string
          usage_notes?: string | null
          want_to_develop?: boolean | null
          writing_level?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "languages_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profile_access: {
        Row: {
          access_role: string
          profile_id: string
          user_id: string
        }
        Insert: {
          access_role: string
          profile_id: string
          user_id: string
        }
        Update: {
          access_role?: string
          profile_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "profile_access_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          city: string | null
          constraints: string | null
          country: string | null
          created_at: string
          date_of_birth: string | null
          desired_salary_amount: number | null
          desired_salary_currency: string | null
          display_name: string
          email: string | null
          full_name: string | null
          hobbies: string | null
          id: string
          import_key: string | null
          linkedin_url: string | null
          objectives: string | null
          phone: string | null
          postal_address: string | null
          preferences: string | null
          preferred_employment: string | null
          preferred_industry: string | null
          preferred_work_mode: string | null
          resources: string | null
          source_document: string | null
          summary: string | null
          updated_at: string
        }
        Insert: {
          city?: string | null
          constraints?: string | null
          country?: string | null
          created_at?: string
          date_of_birth?: string | null
          desired_salary_amount?: number | null
          desired_salary_currency?: string | null
          display_name: string
          email?: string | null
          full_name?: string | null
          hobbies?: string | null
          id?: string
          import_key?: string | null
          linkedin_url?: string | null
          objectives?: string | null
          phone?: string | null
          postal_address?: string | null
          preferences?: string | null
          preferred_employment?: string | null
          preferred_industry?: string | null
          preferred_work_mode?: string | null
          resources?: string | null
          source_document?: string | null
          summary?: string | null
          updated_at?: string
        }
        Update: {
          city?: string | null
          constraints?: string | null
          country?: string | null
          created_at?: string
          date_of_birth?: string | null
          desired_salary_amount?: number | null
          desired_salary_currency?: string | null
          display_name?: string
          email?: string | null
          full_name?: string | null
          hobbies?: string | null
          id?: string
          import_key?: string | null
          linkedin_url?: string | null
          objectives?: string | null
          phone?: string | null
          postal_address?: string | null
          preferences?: string | null
          preferred_employment?: string | null
          preferred_industry?: string | null
          preferred_work_mode?: string | null
          resources?: string | null
          source_document?: string | null
          summary?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      project_skills: {
        Row: {
          profile_id: string
          project_id: string
          skill_id: string
        }
        Insert: {
          profile_id: string
          project_id: string
          skill_id: string
        }
        Update: {
          profile_id?: string
          project_id?: string
          skill_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_skills_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_skills_profile_id_project_id_fkey"
            columns: ["profile_id", "project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["profile_id", "id"]
          },
          {
            foreignKeyName: "project_skills_profile_id_skill_id_fkey"
            columns: ["profile_id", "skill_id"]
            isOneToOne: false
            referencedRelation: "skills"
            referencedColumns: ["profile_id", "id"]
          },
        ]
      }
      project_tools: {
        Row: {
          profile_id: string
          project_id: string
          tool_id: string
        }
        Insert: {
          profile_id: string
          project_id: string
          tool_id: string
        }
        Update: {
          profile_id?: string
          project_id?: string
          tool_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_tools_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_tools_profile_id_project_id_fkey"
            columns: ["profile_id", "project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["profile_id", "id"]
          },
          {
            foreignKeyName: "project_tools_profile_id_tool_id_fkey"
            columns: ["profile_id", "tool_id"]
            isOneToOne: false
            referencedRelation: "tools"
            referencedColumns: ["profile_id", "id"]
          },
        ]
      }
      projects: {
        Row: {
          attribution: string | null
          contribution: string | null
          created_at: string
          domains: string[] | null
          end_year: number | null
          ended_on: string | null
          experience_id: string | null
          goal: string | null
          id: string
          impact_note: string | null
          import_key: string | null
          kind: string | null
          period_label: string | null
          process: string | null
          profile_id: string
          result: string | null
          source_document: string | null
          start_year: number | null
          started_on: string | null
          status: string | null
          title: string
          updated_at: string
        }
        Insert: {
          attribution?: string | null
          contribution?: string | null
          created_at?: string
          domains?: string[] | null
          end_year?: number | null
          ended_on?: string | null
          experience_id?: string | null
          goal?: string | null
          id?: string
          impact_note?: string | null
          import_key?: string | null
          kind?: string | null
          period_label?: string | null
          process?: string | null
          profile_id: string
          result?: string | null
          source_document?: string | null
          start_year?: number | null
          started_on?: string | null
          status?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          attribution?: string | null
          contribution?: string | null
          created_at?: string
          domains?: string[] | null
          end_year?: number | null
          ended_on?: string | null
          experience_id?: string | null
          goal?: string | null
          id?: string
          impact_note?: string | null
          import_key?: string | null
          kind?: string | null
          period_label?: string | null
          process?: string | null
          profile_id?: string
          result?: string | null
          source_document?: string | null
          start_year?: number | null
          started_on?: string | null
          status?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "projects_experience_same_profile"
            columns: ["profile_id", "experience_id"]
            isOneToOne: false
            referencedRelation: "experiences"
            referencedColumns: ["profile_id", "id"]
          },
          {
            foreignKeyName: "projects_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      skill_tools: {
        Row: {
          profile_id: string
          skill_id: string
          tool_id: string
        }
        Insert: {
          profile_id: string
          skill_id: string
          tool_id: string
        }
        Update: {
          profile_id?: string
          skill_id?: string
          tool_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "skill_tools_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "skill_tools_profile_id_skill_id_fkey"
            columns: ["profile_id", "skill_id"]
            isOneToOne: false
            referencedRelation: "skills"
            referencedColumns: ["profile_id", "id"]
          },
          {
            foreignKeyName: "skill_tools_profile_id_tool_id_fkey"
            columns: ["profile_id", "tool_id"]
            isOneToOne: false
            referencedRelation: "tools"
            referencedColumns: ["profile_id", "id"]
          },
        ]
      }
      skills: {
        Row: {
          categories: string[] | null
          created_at: string
          description: string | null
          evidence_note: string | null
          id: string
          import_key: string | null
          kind: string | null
          level: string | null
          profile_id: string
          self_assessed: boolean
          source_document: string | null
          title: string
          updated_at: string
          usage_stage: string | null
          want_to_develop: boolean | null
        }
        Insert: {
          categories?: string[] | null
          created_at?: string
          description?: string | null
          evidence_note?: string | null
          id?: string
          import_key?: string | null
          kind?: string | null
          level?: string | null
          profile_id: string
          self_assessed?: boolean
          source_document?: string | null
          title: string
          updated_at?: string
          usage_stage?: string | null
          want_to_develop?: boolean | null
        }
        Update: {
          categories?: string[] | null
          created_at?: string
          description?: string | null
          evidence_note?: string | null
          id?: string
          import_key?: string | null
          kind?: string | null
          level?: string | null
          profile_id?: string
          self_assessed?: boolean
          source_document?: string | null
          title?: string
          updated_at?: string
          usage_stage?: string | null
          want_to_develop?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "skills_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      tools: {
        Row: {
          categories: string[] | null
          created_at: string
          functions_used: string | null
          id: string
          import_key: string | null
          kind: string | null
          last_used_label: string | null
          level: string | null
          profile_id: string
          self_assessed: boolean
          source_document: string | null
          title: string
          updated_at: string
          url: string | null
          usage_stage: string | null
          want_to_develop: boolean | null
        }
        Insert: {
          categories?: string[] | null
          created_at?: string
          functions_used?: string | null
          id?: string
          import_key?: string | null
          kind?: string | null
          last_used_label?: string | null
          level?: string | null
          profile_id: string
          self_assessed?: boolean
          source_document?: string | null
          title: string
          updated_at?: string
          url?: string | null
          usage_stage?: string | null
          want_to_develop?: boolean | null
        }
        Update: {
          categories?: string[] | null
          created_at?: string
          functions_used?: string | null
          id?: string
          import_key?: string | null
          kind?: string | null
          last_used_label?: string | null
          level?: string | null
          profile_id?: string
          self_assessed?: boolean
          source_document?: string | null
          title?: string
          updated_at?: string
          url?: string | null
          usage_stage?: string | null
          want_to_develop?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "tools_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
