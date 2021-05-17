export interface Class {
    turno: string;
    idTurma: number;
    siglaEscola: string;
    idProfessor: number;
    id: number;
    remCache: any;
    diaSemana: number;
    disciplina: string;
    horario: number
    escola: string;
    matricula: string;
    turma: String;
    dataSemana: string;
    _links: Links;
    _embedded: SubjectObj;
}

export interface InfoClassLink {
    self: Href;
}

export interface Classes {
    aulas: Class[];
}

export interface Links {
    self: Href;
    turma: Href;
}

export interface Href {
    href: string;
}

export interface Subject {
    sigla: string;
    cor: string;
    id: number;
    remCache: any;
    nome: string;
}

export interface SubjectObj {
    disciplina: Subject;
}

export interface AllDataClass {
    id: number;
    data: string;
    diaSemana: number;
    _links: InfoClassLink;
    _embedded: Classes;
}